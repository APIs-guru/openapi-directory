package operations

type DeleteOtaUpdatePathParams struct {
	OtaUpdateID string `pathParam:"style=simple,explode=false,name=otaUpdateId"`
}

type DeleteOtaUpdateQueryParams struct {
	DeleteStream      *bool `queryParam:"style=form,explode=true,name=deleteStream"`
	ForceDeleteAwsJob *bool `queryParam:"style=form,explode=true,name=forceDeleteAWSJob"`
}

type DeleteOtaUpdateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteOtaUpdateRequest struct {
	PathParams  DeleteOtaUpdatePathParams
	QueryParams DeleteOtaUpdateQueryParams
	Headers     DeleteOtaUpdateHeaders
}

type DeleteOtaUpdateResponse struct {
	ContentType                 string
	DeleteOtaUpdateResponse     map[string]interface{}
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
	VersionConflictException    *interface{}
}
