package operations

type PostRestoreAddressToClassicActionEnum string

const (
	PostRestoreAddressToClassicActionEnumRestoreAddressToClassic PostRestoreAddressToClassicActionEnum = "RestoreAddressToClassic"
)

type PostRestoreAddressToClassicVersionEnum string

const (
	PostRestoreAddressToClassicVersionEnumTwoThousandAndSixteen1115 PostRestoreAddressToClassicVersionEnum = "2016-11-15"
)

type PostRestoreAddressToClassicQueryParams struct {
	Action  PostRestoreAddressToClassicActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRestoreAddressToClassicVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRestoreAddressToClassicHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRestoreAddressToClassicRequest struct {
	QueryParams PostRestoreAddressToClassicQueryParams
	Headers     PostRestoreAddressToClassicHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRestoreAddressToClassicResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
