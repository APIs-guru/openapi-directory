package operations

type DeleteRequestValidatorPathParams struct {
	RequestvalidatorID string `pathParam:"style=simple,explode=false,name=requestvalidator_id"`
	RestapiID          string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type DeleteRequestValidatorHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteRequestValidatorRequest struct {
	PathParams DeleteRequestValidatorPathParams
	Headers    DeleteRequestValidatorHeaders
}

type DeleteRequestValidatorResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
