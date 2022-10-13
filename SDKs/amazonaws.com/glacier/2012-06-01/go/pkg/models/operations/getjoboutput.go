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
	Range             *string `header:"name=Range"`
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
