package operations

type AbortMultipartUploadPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	UploadID  string `pathParam:"style=simple,explode=false,name=uploadId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type AbortMultipartUploadHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type AbortMultipartUploadRequest struct {
	PathParams AbortMultipartUploadPathParams
	Headers    AbortMultipartUploadHeaders
}

type AbortMultipartUploadResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	MissingParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
