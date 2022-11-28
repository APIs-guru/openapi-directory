package operations

type InitiateVaultLockPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type InitiateVaultLockHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// InitiateVaultLockRequestBodyPolicy
// Contains the vault lock policy.
type InitiateVaultLockRequestBodyPolicy struct {
	Policy *string `json:"Policy,omitempty"`
}

type InitiateVaultLockRequestBody struct {
	Policy *InitiateVaultLockRequestBodyPolicy `json:"policy,omitempty"`
}

type InitiateVaultLockRequest struct {
	PathParams InitiateVaultLockPathParams
	Headers    InitiateVaultLockHeaders
	Request    InitiateVaultLockRequestBody `request:"mediaType=application/json"`
}

type InitiateVaultLockResponse struct {
	ContentType                    string
	InitiateVaultLockOutput        map[string]interface{}
	InvalidParameterValueException *interface{}
	MissingParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
