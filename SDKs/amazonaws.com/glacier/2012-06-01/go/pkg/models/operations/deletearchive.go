package operations

type DeleteArchivePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	ArchiveID string `pathParam:"style=simple,explode=false,name=archiveId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type DeleteArchiveHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteArchiveRequest struct {
	PathParams DeleteArchivePathParams
	Headers    DeleteArchiveHeaders
}

type DeleteArchiveResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	MissingParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
