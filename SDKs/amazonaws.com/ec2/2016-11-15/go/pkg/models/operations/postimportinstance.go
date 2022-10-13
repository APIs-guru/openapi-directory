package operations

type PostImportInstanceActionEnum string

const (
	PostImportInstanceActionEnumImportInstance PostImportInstanceActionEnum = "ImportInstance"
)

type PostImportInstanceVersionEnum string

const (
	PostImportInstanceVersionEnumTwoThousandAndSixteen1115 PostImportInstanceVersionEnum = "2016-11-15"
)

type PostImportInstanceQueryParams struct {
	Action  PostImportInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostImportInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostImportInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostImportInstanceRequest struct {
	QueryParams PostImportInstanceQueryParams
	Headers     PostImportInstanceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostImportInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
