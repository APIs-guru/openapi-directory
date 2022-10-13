package operations

type PostUpdateAutoScalingGroupActionEnum string

const (
	PostUpdateAutoScalingGroupActionEnumUpdateAutoScalingGroup PostUpdateAutoScalingGroupActionEnum = "UpdateAutoScalingGroup"
)

type PostUpdateAutoScalingGroupVersionEnum string

const (
	PostUpdateAutoScalingGroupVersionEnumTwoThousandAndEleven0101 PostUpdateAutoScalingGroupVersionEnum = "2011-01-01"
)

type PostUpdateAutoScalingGroupQueryParams struct {
	Action  PostUpdateAutoScalingGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateAutoScalingGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateAutoScalingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateAutoScalingGroupRequest struct {
	QueryParams PostUpdateAutoScalingGroupQueryParams
	Headers     PostUpdateAutoScalingGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateAutoScalingGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
