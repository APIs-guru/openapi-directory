package operations

type PurchaseProvisionedCapacityPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type PurchaseProvisionedCapacityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PurchaseProvisionedCapacityRequest struct {
	PathParams PurchaseProvisionedCapacityPathParams
	Headers    PurchaseProvisionedCapacityHeaders
}

type PurchaseProvisionedCapacityResponse struct {
	ContentType                       string
	InvalidParameterValueException    *interface{}
	LimitExceededException            *interface{}
	MissingParameterValueException    *interface{}
	PurchaseProvisionedCapacityOutput map[string]interface{}
	ServiceUnavailableException       *interface{}
	StatusCode                        int64
}
