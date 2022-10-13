package operations

type PostDescribeFpgaImagesActionEnum string

const (
	PostDescribeFpgaImagesActionEnumDescribeFpgaImages PostDescribeFpgaImagesActionEnum = "DescribeFpgaImages"
)

type PostDescribeFpgaImagesVersionEnum string

const (
	PostDescribeFpgaImagesVersionEnumTwoThousandAndSixteen1115 PostDescribeFpgaImagesVersionEnum = "2016-11-15"
)

type PostDescribeFpgaImagesQueryParams struct {
	Action     PostDescribeFpgaImagesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                           `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                           `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeFpgaImagesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeFpgaImagesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeFpgaImagesRequest struct {
	QueryParams PostDescribeFpgaImagesQueryParams
	Headers     PostDescribeFpgaImagesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeFpgaImagesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
