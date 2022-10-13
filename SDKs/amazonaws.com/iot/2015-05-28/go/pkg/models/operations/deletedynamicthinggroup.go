package operations

type DeleteDynamicThingGroupPathParams struct {
	ThingGroupName string `pathParam:"style=simple,explode=false,name=thingGroupName"`
}

type DeleteDynamicThingGroupQueryParams struct {
	ExpectedVersion *int64 `queryParam:"style=form,explode=true,name=expectedVersion"`
}

type DeleteDynamicThingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteDynamicThingGroupRequest struct {
	PathParams  DeleteDynamicThingGroupPathParams
	QueryParams DeleteDynamicThingGroupQueryParams
	Headers     DeleteDynamicThingGroupHeaders
}

type DeleteDynamicThingGroupResponse struct {
	ContentType                     string
	DeleteDynamicThingGroupResponse map[string]interface{}
	InternalFailureException        *interface{}
	InvalidRequestException         *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	VersionConflictException        *interface{}
}
