package operations

type DeleteGraphqlAPIPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type DeleteGraphqlAPIHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteGraphqlAPIRequest struct {
	PathParams DeleteGraphqlAPIPathParams
	Headers    DeleteGraphqlAPIHeaders
}

type DeleteGraphqlAPIResponse struct {
	AccessDeniedException           *interface{}
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteGraphqlAPIResponse        map[string]interface{}
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
