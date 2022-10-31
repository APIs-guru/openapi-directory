package operations

type DetachSecurityProfilePathParams struct {
	SecurityProfileName string `pathParam:"style=simple,explode=false,name=securityProfileName"`
}

type DetachSecurityProfileQueryParams struct {
	SecurityProfileTargetArn string `queryParam:"style=form,explode=true,name=securityProfileTargetArn"`
}

type DetachSecurityProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
