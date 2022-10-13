package operations

type GetDescribeLifecycleHooksActionEnum string

const (
	GetDescribeLifecycleHooksActionEnumDescribeLifecycleHooks GetDescribeLifecycleHooksActionEnum = "DescribeLifecycleHooks"
)

type GetDescribeLifecycleHooksVersionEnum string

const (
	GetDescribeLifecycleHooksVersionEnumTwoThousandAndEleven0101 GetDescribeLifecycleHooksVersionEnum = "2011-01-01"
)

type GetDescribeLifecycleHooksQueryParams struct {
	Action               GetDescribeLifecycleHooksActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                               `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	LifecycleHookNames   []string                             `queryParam:"style=form,explode=true,name=LifecycleHookNames"`
	Version              GetDescribeLifecycleHooksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeLifecycleHooksHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeLifecycleHooksRequest struct {
	QueryParams GetDescribeLifecycleHooksQueryParams
	Headers     GetDescribeLifecycleHooksHeaders
}

type GetDescribeLifecycleHooksResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
