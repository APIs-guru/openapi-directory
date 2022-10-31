package operations

type PostDescribeFpgaImageAttributeActionEnum string

const (
	PostDescribeFpgaImageAttributeActionEnumDescribeFpgaImageAttribute PostDescribeFpgaImageAttributeActionEnum = "DescribeFpgaImageAttribute"
)

type PostDescribeFpgaImageAttributeVersionEnum string

const (
	PostDescribeFpgaImageAttributeVersionEnumTwoThousandAndSixteen1115 PostDescribeFpgaImageAttributeVersionEnum = "2016-11-15"
)

type PostDescribeFpgaImageAttributeQueryParams struct {
	Action  PostDescribeFpgaImageAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeFpgaImageAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeFpgaImageAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeFpgaImageAttributeRequest struct {
	QueryParams PostDescribeFpgaImageAttributeQueryParams
	Headers     PostDescribeFpgaImageAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeFpgaImageAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
