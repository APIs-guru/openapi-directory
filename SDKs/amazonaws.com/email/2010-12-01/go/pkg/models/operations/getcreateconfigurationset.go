package operations

type GetCreateConfigurationSetActionEnum string

const (
	GetCreateConfigurationSetActionEnumCreateConfigurationSet GetCreateConfigurationSetActionEnum = "CreateConfigurationSet"
)

// GetCreateConfigurationSetConfigurationSet
// <p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>
type GetCreateConfigurationSetConfigurationSet struct {
	Name string `queryParam:"name=Name"`
}

type GetCreateConfigurationSetVersionEnum string

const (
	GetCreateConfigurationSetVersionEnumTwoThousandAndTen1201 GetCreateConfigurationSetVersionEnum = "2010-12-01"
)

type GetCreateConfigurationSetQueryParams struct {
	Action           GetCreateConfigurationSetActionEnum       `queryParam:"style=form,explode=true,name=Action"`
	ConfigurationSet GetCreateConfigurationSetConfigurationSet `queryParam:"style=form,explode=true,name=ConfigurationSet"`
	Version          GetCreateConfigurationSetVersionEnum      `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateConfigurationSetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCreateConfigurationSetRequest struct {
	QueryParams GetCreateConfigurationSetQueryParams
	Headers     GetCreateConfigurationSetHeaders
}

type GetCreateConfigurationSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
