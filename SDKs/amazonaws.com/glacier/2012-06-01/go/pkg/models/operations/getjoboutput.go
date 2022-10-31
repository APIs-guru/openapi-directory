package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobOutputPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type GetJobOutputHeaders struct {
	Range             *string `header:"style=simple,explode=false,name=Range"`
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetJobOutputRequest struct {
	PathParams GetJobOutputPathParams
	Headers    GetJobOutputHeaders
}

type GetJobOutputResponse struct {
	ContentType                    string
	GetJobOutputOutput             *shared.GetJobOutputOutput
	InvalidParameterValueException *interface{}
	MissingParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
