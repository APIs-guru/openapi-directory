package operations

type CompleteMultipartUploadPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	UploadID  string `pathParam:"style=simple,explode=false,name=uploadId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type CompleteMultipartUploadHeaders struct {
	XAmzAlgorithm      *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256  *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential     *string `header:"name=X-Amz-Credential"`
	XAmzDate           *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken  *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature      *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders  *string `header:"name=X-Amz-SignedHeaders"`
	XAmzArchiveSize    *string `header:"name=x-amz-archive-size"`
	XAmzSha256TreeHash *string `header:"name=x-amz-sha256-tree-hash"`
}

type CompleteMultipartUploadRequest struct {
	PathParams CompleteMultipartUploadPathParams
	Headers    CompleteMultipartUploadHeaders
}

type CompleteMultipartUploadResponse struct {
	ArchiveCreationOutput          map[string]interface{}
	ContentType                    string
	InvalidParameterValueException *interface{}
	MissingParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
