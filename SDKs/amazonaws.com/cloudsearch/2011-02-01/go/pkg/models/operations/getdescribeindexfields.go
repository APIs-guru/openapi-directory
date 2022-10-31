package operations

type GetDescribeIndexFieldsActionEnum string

const (
	GetDescribeIndexFieldsActionEnumDescribeIndexFields GetDescribeIndexFieldsActionEnum = "DescribeIndexFields"
)

type GetDescribeIndexFieldsVersionEnum string

const (
	GetDescribeIndexFieldsVersionEnumTwoThousandAndEleven0201 GetDescribeIndexFieldsVersionEnum = "2011-02-01"
)

type GetDescribeIndexFieldsQueryParams struct {
	Action     GetDescribeIndexFieldsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                            `queryParam:"style=form,explode=true,name=DomainName"`
	FieldNames []string                          `queryParam:"style=form,explode=true,name=FieldNames"`
	Version    GetDescribeIndexFieldsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeIndexFieldsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeIndexFieldsRequest struct {
	QueryParams GetDescribeIndexFieldsQueryParams
	Headers     GetDescribeIndexFieldsHeaders
}

type GetDescribeIndexFieldsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
