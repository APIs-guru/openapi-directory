package operations

type PostExportImageActionEnum string

const (
	PostExportImageActionEnumExportImage PostExportImageActionEnum = "ExportImage"
)

type PostExportImageVersionEnum string

const (
	PostExportImageVersionEnumTwoThousandAndSixteen1115 PostExportImageVersionEnum = "2016-11-15"
)

type PostExportImageQueryParams struct {
	Action  PostExportImageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostExportImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostExportImageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostExportImageRequest struct {
	QueryParams PostExportImageQueryParams
	Headers     PostExportImageHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostExportImageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
