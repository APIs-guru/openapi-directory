package operations

type DeleteBillingGroupPathParams struct {
	BillingGroupName string `pathParam:"style=simple,explode=false,name=billingGroupName"`
}

type DeleteBillingGroupQueryParams struct {
	ExpectedVersion *int64 `queryParam:"style=form,explode=true,name=expectedVersion"`
}

type DeleteBillingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteBillingGroupRequest struct {
	PathParams  DeleteBillingGroupPathParams
	QueryParams DeleteBillingGroupQueryParams
	Headers     DeleteBillingGroupHeaders
}

type DeleteBillingGroupResponse struct {
	ContentType                string
	DeleteBillingGroupResponse map[string]interface{}
	InternalFailureException   *interface{}
	InvalidRequestException    *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	VersionConflictException   *interface{}
}
