package operations

type GetDescribeStemmingOptionsActionEnum string

const (
	GetDescribeStemmingOptionsActionEnumDescribeStemmingOptions GetDescribeStemmingOptionsActionEnum = "DescribeStemmingOptions"
)

type GetDescribeStemmingOptionsVersionEnum string

const (
	GetDescribeStemmingOptionsVersionEnumTwoThousandAndEleven0201 GetDescribeStemmingOptionsVersionEnum = "2011-02-01"
)

type GetDescribeStemmingOptionsQueryParams struct {
	Action     GetDescribeStemmingOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                                `queryParam:"style=form,explode=true,name=DomainName"`
	Version    GetDescribeStemmingOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeStemmingOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeStemmingOptionsRequest struct {
	QueryParams GetDescribeStemmingOptionsQueryParams
	Headers     GetDescribeStemmingOptionsHeaders
}

type GetDescribeStemmingOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
