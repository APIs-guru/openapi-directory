package operations

type PostUpdateConfigurationSetSendingEnabledActionEnum string

const (
	PostUpdateConfigurationSetSendingEnabledActionEnumUpdateConfigurationSetSendingEnabled PostUpdateConfigurationSetSendingEnabledActionEnum = "UpdateConfigurationSetSendingEnabled"
)

type PostUpdateConfigurationSetSendingEnabledVersionEnum string

const (
	PostUpdateConfigurationSetSendingEnabledVersionEnumTwoThousandAndTen1201 PostUpdateConfigurationSetSendingEnabledVersionEnum = "2010-12-01"
)

type PostUpdateConfigurationSetSendingEnabledQueryParams struct {
	Action  PostUpdateConfigurationSetSendingEnabledActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateConfigurationSetSendingEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateConfigurationSetSendingEnabledHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateConfigurationSetSendingEnabledRequest struct {
	QueryParams PostUpdateConfigurationSetSendingEnabledQueryParams
	Headers     PostUpdateConfigurationSetSendingEnabledHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateConfigurationSetSendingEnabledResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
