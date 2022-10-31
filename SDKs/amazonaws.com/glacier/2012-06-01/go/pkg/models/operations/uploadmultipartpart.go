package operations

type UploadMultipartPartPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	UploadID  string `pathParam:"style=simple,explode=false,name=uploadId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type UploadMultipartPartHeaders struct {
	ContentRange       *string `header:"style=simple,explode=false,name=Content-Range"`
	XAmzAlgorithm      *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256  *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential     *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate           *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken  *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature      *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders  *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzSha256TreeHash *string `header:"style=simple,explode=false,name=x-amz-sha256-tree-hash"`
}

type UploadMultipartPartRequestBody struct {
	Body *string `json:"body,omitempty"`
}

type UploadMultipartPartRequest struct {
	PathParams UploadMultipartPartPathParams
	Headers    UploadMultipartPartHeaders
	Request    UploadMultipartPartRequestBody `request:"mediaType=application/json"`
}

type UploadMultipartPartResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	MissingParameterValueException *interface{}
	RequestTimeoutException        *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	UploadMultipartPartOutput      map[string]interface{}
}
