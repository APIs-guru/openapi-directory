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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type RemoveTagsFromVaultRequestBody struct {
	TagKeys []string `json:"TagKeys,omitempty"`
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
