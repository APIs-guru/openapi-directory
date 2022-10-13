package operations

type DeleteDashboardPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardId"`
}

type DeleteDashboardQueryParams struct {
	ClientToken *string `queryParam:"style=form,explode=true,name=clientToken"`
}

type DeleteDashboardHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteDashboardRequest struct {
	PathParams  DeleteDashboardPathParams
	QueryParams DeleteDashboardQueryParams
	Headers     DeleteDashboardHeaders
}

type DeleteDashboardResponse struct {
	ContentType               string
	DeleteDashboardResponse   map[string]interface{}
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
