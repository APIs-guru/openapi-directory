package operations

type UploadArchivePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type UploadArchiveHeaders struct {
	XAmzAlgorithm          *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256      *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential         *string `header:"name=X-Amz-Credential"`
	XAmzDate               *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken      *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature          *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders      *string `header:"name=X-Amz-SignedHeaders"`
	XAmzArchiveDescription *string `header:"name=x-amz-archive-description"`
	XAmzSha256TreeHash     *string `header:"name=x-amz-sha256-tree-hash"`
}

type UploadArchiveRequestBody struct {
	Body *string `json:"body,omitempty"`
}

type UploadArchiveRequest struct {
	PathParams UploadArchivePathParams
	Headers    UploadArchiveHeaders
	Request    UploadArchiveRequestBody `request:"mediaType=application/json"`
}

type UploadArchiveResponse struct {
	ArchiveCreationOutput          map[string]interface{}
	ContentType                    string
	InvalidParameterValueException *interface{}
	MissingParameterValueException *interface{}
	RequestTimeoutException        *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
