package operations

type RemoveTagsFromVaultPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type RemoveTagsFromVaultOperationEnum string

const (
	RemoveTagsFromVaultOperationEnumRemove RemoveTagsFromVaultOperationEnum = "remove"
)

type RemoveTagsFromVaultQueryParams struct {
	Operation RemoveTagsFromVaultOperationEnum `queryParam:"style=form,explode=true,name=operation"`
}

type RemoveTagsFromVaultHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RemoveTagsFromVaultRequestBody struct {
	TagKeys []string `json:"TagKeys"`
}

type RemoveTagsFromVaultRequest struct {
	PathParams  RemoveTagsFromVaultPathParams
	QueryParams RemoveTagsFromVaultQueryParams
	Headers     RemoveTagsFromVaultHeaders
	Request     RemoveTagsFromVaultRequestBody `request:"mediaType=application/json"`
}

type RemoveTagsFromVaultResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	MissingParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
