package operations

type PostDescribeStemmingOptionsActionEnum string

const (
	PostDescribeStemmingOptionsActionEnumDescribeStemmingOptions PostDescribeStemmingOptionsActionEnum = "DescribeStemmingOptions"
)

type PostDescribeStemmingOptionsVersionEnum string

const (
	PostDescribeStemmingOptionsVersionEnumTwoThousandAndEleven0201 PostDescribeStemmingOptionsVersionEnum = "2011-02-01"
)

type PostDescribeStemmingOptionsQueryParams struct {
	Action  PostDescribeStemmingOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeStemmingOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeStemmingOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeStemmingOptionsRequest struct {
	QueryParams PostDescribeStemmingOptionsQueryParams
	Headers     PostDescribeStemmingOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeStemmingOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
