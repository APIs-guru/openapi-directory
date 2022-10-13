package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForVaultPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type ListTagsForVaultHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTagsForVaultRequest struct {
	PathParams ListTagsForVaultPathParams
	Headers    ListTagsForVaultHeaders
}

type ListTagsForVaultResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	ListTagsForVaultOutput         *shared.ListTagsForVaultOutput
	MissingParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
