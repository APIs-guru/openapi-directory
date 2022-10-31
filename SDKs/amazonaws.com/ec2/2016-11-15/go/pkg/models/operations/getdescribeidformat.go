package operations

type GetDescribeIDFormatActionEnum string

const (
	GetDescribeIDFormatActionEnumDescribeIDFormat GetDescribeIDFormatActionEnum = "DescribeIdFormat"
)

type GetDescribeIDFormatVersionEnum string

const (
	GetDescribeIDFormatVersionEnumTwoThousandAndSixteen1115 GetDescribeIDFormatVersionEnum = "2016-11-15"
)

type GetDescribeIDFormatQueryParams struct {
	Action   GetDescribeIDFormatActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Resource *string                        `queryParam:"style=form,explode=true,name=Resource"`
	Version  GetDescribeIDFormatVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeIDFormatHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeIDFormatRequest struct {
	QueryParams GetDescribeIDFormatQueryParams
	Headers     GetDescribeIDFormatHeaders
}

type GetDescribeIDFormatResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
