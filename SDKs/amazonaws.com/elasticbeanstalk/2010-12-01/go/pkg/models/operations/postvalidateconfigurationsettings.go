package operations

type PostValidateConfigurationSettingsActionEnum string

const (
	PostValidateConfigurationSettingsActionEnumValidateConfigurationSettings PostValidateConfigurationSettingsActionEnum = "ValidateConfigurationSettings"
)

type PostValidateConfigurationSettingsVersionEnum string

const (
	PostValidateConfigurationSettingsVersionEnumTwoThousandAndTen1201 PostValidateConfigurationSettingsVersionEnum = "2010-12-01"
)

type PostValidateConfigurationSettingsQueryParams struct {
	Action  PostValidateConfigurationSettingsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostValidateConfigurationSettingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostValidateConfigurationSettingsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostValidateConfigurationSettingsRequest struct {
	QueryParams PostValidateConfigurationSettingsQueryParams
	Headers     PostValidateConfigurationSettingsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostValidateConfigurationSettingsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
