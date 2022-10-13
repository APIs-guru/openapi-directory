package operations

import (
	"openapi/pkg/models/shared"
)

type GetVaultAccessPolicyPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type GetVaultAccessPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetVaultAccessPolicyRequest struct {
	PathParams GetVaultAccessPolicyPathParams
	Headers    GetVaultAccessPolicyHeaders
}

type GetVaultAccessPolicyResponse struct {
	ContentType                    string
	GetVaultAccessPolicyOutput     *shared.GetVaultAccessPolicyOutput
	InvalidParameterValueException *interface{}
	MissingParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
