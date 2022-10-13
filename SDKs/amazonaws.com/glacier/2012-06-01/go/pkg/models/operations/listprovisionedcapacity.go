package operations

import (
	"openapi/pkg/models/shared"
)

type ListProvisionedCapacityPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type ListProvisionedCapacityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListProvisionedCapacityRequest struct {
	PathParams ListProvisionedCapacityPathParams
	Headers    ListProvisionedCapacityHeaders
}

type ListProvisionedCapacityResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	ListProvisionedCapacityOutput  *shared.ListProvisionedCapacityOutput
	MissingParameterValueException *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
