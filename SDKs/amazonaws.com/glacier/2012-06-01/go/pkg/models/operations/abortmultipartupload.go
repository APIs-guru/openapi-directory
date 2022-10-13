package operations

type AbortMultipartUploadPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	UploadID  string `pathParam:"style=simple,explode=false,name=uploadId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type AbortMultipartUploadHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
