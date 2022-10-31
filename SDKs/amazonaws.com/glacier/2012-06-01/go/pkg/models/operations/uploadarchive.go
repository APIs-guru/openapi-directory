package operations

type UploadArchivePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type UploadArchiveHeaders struct {
	XAmzAlgorithm          *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256      *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential         *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate               *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken      *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature          *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders      *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzArchiveDescription *string `header:"style=simple,explode=false,name=x-amz-archive-description"`
	XAmzSha256TreeHash     *string `header:"style=simple,explode=false,name=x-amz-sha256-tree-hash"`
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
