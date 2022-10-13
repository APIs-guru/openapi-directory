package operations

type DeleteSecurityProfilePathParams struct {
	SecurityProfileName string `pathParam:"style=simple,explode=false,name=securityProfileName"`
}

type DeleteSecurityProfileQueryParams struct {
	ExpectedVersion *int64 `queryParam:"style=form,explode=true,name=expectedVersion"`
}

type DeleteSecurityProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteSecurityProfileRequest struct {
	PathParams  DeleteSecurityProfilePathParams
	QueryParams DeleteSecurityProfileQueryParams
	Headers     DeleteSecurityProfileHeaders
}

type DeleteSecurityProfileResponse struct {
	ContentType                   string
	DeleteSecurityProfileResponse map[string]interface{}
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	VersionConflictException      *interface{}
}
