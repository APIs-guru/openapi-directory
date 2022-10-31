package operations

type PostDescribeFleetHistoryActionEnum string

const (
	PostDescribeFleetHistoryActionEnumDescribeFleetHistory PostDescribeFleetHistoryActionEnum = "DescribeFleetHistory"
)

type PostDescribeFleetHistoryVersionEnum string

const (
	PostDescribeFleetHistoryVersionEnumTwoThousandAndSixteen1115 PostDescribeFleetHistoryVersionEnum = "2016-11-15"
)

type PostDescribeFleetHistoryQueryParams struct {
	Action  PostDescribeFleetHistoryActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeFleetHistoryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeFleetHistoryHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeFleetHistoryRequest struct {
	QueryParams PostDescribeFleetHistoryQueryParams
	Headers     PostDescribeFleetHistoryHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeFleetHistoryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
