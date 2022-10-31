package operations

type CompleteVaultLockPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	LockID    string `pathParam:"style=simple,explode=false,name=lockId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type CompleteVaultLockHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CompleteVaultLockRequest struct {
	PathParams CompleteVaultLockPathParams
	Headers    CompleteVaultLockHeaders
}

type CompleteVaultLockResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	MissingParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
