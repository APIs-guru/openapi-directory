package operations

type DeletePresetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type DeletePresetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeletePresetRequest struct {
	PathParams DeletePresetPathParams
	Headers    DeletePresetHeaders
}

type DeletePresetResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	DeletePresetResponse         map[string]interface{}
	IncompatibleVersionException *interface{}
	InternalServiceException     *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
