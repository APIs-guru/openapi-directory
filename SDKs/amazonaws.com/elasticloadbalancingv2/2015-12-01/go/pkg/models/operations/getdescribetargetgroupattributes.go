package operations

type GetDescribeTargetGroupAttributesActionEnum string

const (
	GetDescribeTargetGroupAttributesActionEnumDescribeTargetGroupAttributes GetDescribeTargetGroupAttributesActionEnum = "DescribeTargetGroupAttributes"
)

type GetDescribeTargetGroupAttributesVersionEnum string

const (
	GetDescribeTargetGroupAttributesVersionEnumTwoThousandAndFifteen1201 GetDescribeTargetGroupAttributesVersionEnum = "2015-12-01"
)

type GetDescribeTargetGroupAttributesQueryParams struct {
	Action         GetDescribeTargetGroupAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	TargetGroupArn string                                      `queryParam:"style=form,explode=true,name=TargetGroupArn"`
	Version        GetDescribeTargetGroupAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeTargetGroupAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeTargetGroupAttributesRequest struct {
	QueryParams GetDescribeTargetGroupAttributesQueryParams
	Headers     GetDescribeTargetGroupAttributesHeaders
}

type GetDescribeTargetGroupAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
