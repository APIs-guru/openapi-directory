package operations

type GetDescribeStopwordOptionsActionEnum string

const (
	GetDescribeStopwordOptionsActionEnumDescribeStopwordOptions GetDescribeStopwordOptionsActionEnum = "DescribeStopwordOptions"
)

type GetDescribeStopwordOptionsVersionEnum string

const (
	GetDescribeStopwordOptionsVersionEnumTwoThousandAndEleven0201 GetDescribeStopwordOptionsVersionEnum = "2011-02-01"
)

type GetDescribeStopwordOptionsQueryParams struct {
	Action     GetDescribeStopwordOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                                `queryParam:"style=form,explode=true,name=DomainName"`
	Version    GetDescribeStopwordOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeStopwordOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeStopwordOptionsRequest struct {
	QueryParams GetDescribeStopwordOptionsQueryParams
	Headers     GetDescribeStopwordOptionsHeaders
}

type GetDescribeStopwordOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
