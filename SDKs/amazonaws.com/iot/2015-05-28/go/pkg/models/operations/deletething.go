package operations

type DeleteThingPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type DeleteThingQueryParams struct {
	ExpectedVersion *int64 `queryParam:"style=form,explode=true,name=expectedVersion"`
}

type DeleteThingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteThingRequest struct {
	PathParams  DeleteThingPathParams
	QueryParams DeleteThingQueryParams
	Headers     DeleteThingHeaders
}

type DeleteThingResponse struct {
	ContentType                 string
	DeleteThingResponse         map[string]interface{}
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
	VersionConflictException    *interface{}
}
