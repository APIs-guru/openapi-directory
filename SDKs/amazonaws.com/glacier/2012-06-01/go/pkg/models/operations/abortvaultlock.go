package operations

type AbortVaultLockPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type AbortVaultLockHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AbortVaultLockRequest struct {
	PathParams AbortVaultLockPathParams
	Headers    AbortVaultLockHeaders
}

type AbortVaultLockResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	MissingParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
