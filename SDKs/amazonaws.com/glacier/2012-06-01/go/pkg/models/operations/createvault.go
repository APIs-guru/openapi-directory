package operations

type CreateVaultPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type CreateVaultHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateVaultRequest struct {
	PathParams CreateVaultPathParams
	Headers    CreateVaultHeaders
}

type CreateVaultResponse struct {
	ContentType                    string
	CreateVaultOutput              map[string]interface{}
	InvalidParameterValueException *interface{}
	LimitExceededException         *interface{}
	MissingParameterValueException *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
