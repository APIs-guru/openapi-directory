package operations

type PostCreateAutoScalingGroupActionEnum string

const (
	PostCreateAutoScalingGroupActionEnumCreateAutoScalingGroup PostCreateAutoScalingGroupActionEnum = "CreateAutoScalingGroup"
)

type PostCreateAutoScalingGroupVersionEnum string

const (
	PostCreateAutoScalingGroupVersionEnumTwoThousandAndEleven0101 PostCreateAutoScalingGroupVersionEnum = "2011-01-01"
)

type PostCreateAutoScalingGroupQueryParams struct {
	Action  PostCreateAutoScalingGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateAutoScalingGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateAutoScalingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateAutoScalingGroupRequest struct {
	QueryParams PostCreateAutoScalingGroupQueryParams
	Headers     PostCreateAutoScalingGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateAutoScalingGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
