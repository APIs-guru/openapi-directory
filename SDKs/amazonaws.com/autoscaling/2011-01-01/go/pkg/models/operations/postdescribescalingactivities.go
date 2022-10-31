package operations

type PostDescribeScalingActivitiesActionEnum string

const (
	PostDescribeScalingActivitiesActionEnumDescribeScalingActivities PostDescribeScalingActivitiesActionEnum = "DescribeScalingActivities"
)

type PostDescribeScalingActivitiesVersionEnum string

const (
	PostDescribeScalingActivitiesVersionEnumTwoThousandAndEleven0101 PostDescribeScalingActivitiesVersionEnum = "2011-01-01"
)

type PostDescribeScalingActivitiesQueryParams struct {
	Action     PostDescribeScalingActivitiesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxRecords *string                                  `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken  *string                                  `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeScalingActivitiesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeScalingActivitiesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeScalingActivitiesRequest struct {
	QueryParams PostDescribeScalingActivitiesQueryParams
	Headers     PostDescribeScalingActivitiesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeScalingActivitiesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
