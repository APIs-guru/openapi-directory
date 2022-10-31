package operations

type PostDescribeMetricCollectionTypesActionEnum string

const (
	PostDescribeMetricCollectionTypesActionEnumDescribeMetricCollectionTypes PostDescribeMetricCollectionTypesActionEnum = "DescribeMetricCollectionTypes"
)

type PostDescribeMetricCollectionTypesVersionEnum string

const (
	PostDescribeMetricCollectionTypesVersionEnumTwoThousandAndEleven0101 PostDescribeMetricCollectionTypesVersionEnum = "2011-01-01"
)

type PostDescribeMetricCollectionTypesQueryParams struct {
	Action  PostDescribeMetricCollectionTypesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeMetricCollectionTypesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeMetricCollectionTypesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeMetricCollectionTypesRequest struct {
	QueryParams PostDescribeMetricCollectionTypesQueryParams
	Headers     PostDescribeMetricCollectionTypesHeaders
}

type PostDescribeMetricCollectionTypesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
