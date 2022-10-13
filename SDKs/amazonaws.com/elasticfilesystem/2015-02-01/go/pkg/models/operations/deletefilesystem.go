package operations

type DeleteFileSystemPathParams struct {
	FileSystemID string `pathParam:"style=simple,explode=false,name=FileSystemId"`
}

type DeleteFileSystemHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteFileSystemRequest struct {
	PathParams DeleteFileSystemPathParams
	Headers    DeleteFileSystemHeaders
}

type DeleteFileSystemResponse struct {
	BadRequest          *interface{}
	ContentType         string
	FileSystemInUse     *interface{}
	FileSystemNotFound  *interface{}
	InternalServerError *interface{}
	StatusCode          int64
}
