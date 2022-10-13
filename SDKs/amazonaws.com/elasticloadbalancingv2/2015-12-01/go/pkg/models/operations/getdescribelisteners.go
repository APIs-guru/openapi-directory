package operations

type GetDescribeListenersActionEnum string

const (
	GetDescribeListenersActionEnumDescribeListeners GetDescribeListenersActionEnum = "DescribeListeners"
)

type GetDescribeListenersVersionEnum string

const (
	GetDescribeListenersVersionEnumTwoThousandAndFifteen1201 GetDescribeListenersVersionEnum = "2015-12-01"
)

type GetDescribeListenersQueryParams struct {
	Action          GetDescribeListenersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ListenerArns    []string                        `queryParam:"style=form,explode=true,name=ListenerArns"`
	LoadBalancerArn *string                         `queryParam:"style=form,explode=true,name=LoadBalancerArn"`
	Marker          *string                         `queryParam:"style=form,explode=true,name=Marker"`
	PageSize        *int64                          `queryParam:"style=form,explode=true,name=PageSize"`
	Version         GetDescribeListenersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeListenersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeListenersRequest struct {
	QueryParams GetDescribeListenersQueryParams
	Headers     GetDescribeListenersHeaders
}

type GetDescribeListenersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
