package operations

type AddTagsToVaultPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type AddTagsToVaultOperationEnum string

const (
	AddTagsToVaultOperationEnumAdd AddTagsToVaultOperationEnum = "add"
)

type AddTagsToVaultQueryParams struct {
	Operation AddTagsToVaultOperationEnum `queryParam:"style=form,explode=true,name=operation"`
}

type AddTagsToVaultHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type AddTagsToVaultRequestBody struct {
	Tags map[string]string `json:"Tags,omitempty"`
}

type AddTagsToVaultRequest struct {
	PathParams  AddTagsToVaultPathParams
	QueryParams AddTagsToVaultQueryParams
	Headers     AddTagsToVaultHeaders
	Request     AddTagsToVaultRequestBody `request:"mediaType=application/json"`
}

type AddTagsToVaultResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	LimitExceededException         *interface{}
	MissingParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
