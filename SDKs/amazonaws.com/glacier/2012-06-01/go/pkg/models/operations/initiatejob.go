package operations

import (
	"openapi/pkg/models/shared"
)

type InitiateJobPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type InitiateJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type InitiateJobRequestBodyJobParameters struct {
	ArchiveID                    *string                            `json:"ArchiveId"`
	Description                  *string                            `json:"Description"`
	Format                       *string                            `json:"Format"`
	InventoryRetrievalParameters *shared.InventoryRetrievalJobInput `json:"InventoryRetrievalParameters"`
	OutputLocation               *shared.OutputLocation             `json:"OutputLocation"`
	RetrievalByteRange           *string                            `json:"RetrievalByteRange"`
	SnsTopic                     *string                            `json:"SNSTopic"`
	SelectParameters             *shared.SelectParameters           `json:"SelectParameters"`
	Tier                         *string                            `json:"Tier"`
	Type                         *string                            `json:"Type"`
}

type InitiateJobRequestBody struct {
	JobParameters *InitiateJobRequestBodyJobParameters `json:"jobParameters"`
}

type InitiateJobRequest struct {
	PathParams InitiateJobPathParams
	Headers    InitiateJobHeaders
	Request    InitiateJobRequestBody `request:"mediaType=application/json"`
}

type InitiateJobResponse struct {
	ContentType                    string
	InitiateJobOutput              map[string]interface{}
	InsufficientCapacityException  *interface{}
	InvalidParameterValueException *interface{}
	MissingParameterValueException *interface{}
	PolicyEnforcedException        *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
