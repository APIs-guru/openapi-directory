package operations

type AttachThingPrincipalPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type AttachThingPrincipalHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznPrincipal    string  `header:"name=x-amzn-principal"`
}

type AttachThingPrincipalRequest struct {
	PathParams AttachThingPrincipalPathParams
	Headers    AttachThingPrincipalHeaders
}

type AttachThingPrincipalResponse struct {
	AttachThingPrincipalResponse map[string]interface{}
	ContentType                  string
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
	UnauthorizedException        *interface{}
}
