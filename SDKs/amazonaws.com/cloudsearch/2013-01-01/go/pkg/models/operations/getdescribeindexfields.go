package operations

type GetDescribeIndexFieldsActionEnum string

const (
	GetDescribeIndexFieldsActionEnumDescribeIndexFields GetDescribeIndexFieldsActionEnum = "DescribeIndexFields"
)

type GetDescribeIndexFieldsVersionEnum string

const (
	GetDescribeIndexFieldsVersionEnumTwoThousandAndThirteen0101 GetDescribeIndexFieldsVersionEnum = "2013-01-01"
)

type GetDescribeIndexFieldsQueryParams struct {
	Action     GetDescribeIndexFieldsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Deployed   *bool                             `queryParam:"style=form,explode=true,name=Deployed"`
	DomainName string                            `queryParam:"style=form,explode=true,name=DomainName"`
	FieldNames []string                          `queryParam:"style=form,explode=true,name=FieldNames"`
	Version    GetDescribeIndexFieldsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeIndexFieldsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
