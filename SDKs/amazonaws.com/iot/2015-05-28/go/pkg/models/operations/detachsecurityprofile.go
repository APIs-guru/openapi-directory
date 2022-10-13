package operations

type DetachSecurityProfilePathParams struct {
	SecurityProfileName string `pathParam:"style=simple,explode=false,name=securityProfileName"`
}

type DetachSecurityProfileQueryParams struct {
	SecurityProfileTargetArn string `queryParam:"style=form,explode=true,name=securityProfileTargetArn"`
}

type DetachSecurityProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DetachSecurityProfileRequest struct {
	PathParams  DetachSecurityProfilePathParams
	QueryParams DetachSecurityProfileQueryParams
	Headers     DetachSecurityProfileHeaders
}

type DetachSecurityProfileResponse struct {
	ContentType                   string
	DetachSecurityProfileResponse map[string]interface{}
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
