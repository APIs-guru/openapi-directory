package operations

type SetVaultAccessPolicyPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type SetVaultAccessPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SetVaultAccessPolicyRequestBodyPolicy struct {
	Policy *string `json:"Policy"`
}

type SetVaultAccessPolicyRequestBody struct {
	Policy *SetVaultAccessPolicyRequestBodyPolicy `json:"policy"`
}

type SetVaultAccessPolicyRequest struct {
	PathParams SetVaultAccessPolicyPathParams
	Headers    SetVaultAccessPolicyHeaders
	Request    SetVaultAccessPolicyRequestBody `request:"mediaType=application/json"`
}

type SetVaultAccessPolicyResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	MissingParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
