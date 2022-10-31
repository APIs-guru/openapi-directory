package operations

type GetDeleteLifecycleHookActionEnum string

const (
	GetDeleteLifecycleHookActionEnumDeleteLifecycleHook GetDeleteLifecycleHookActionEnum = "DeleteLifecycleHook"
)

type GetDeleteLifecycleHookVersionEnum string

const (
	GetDeleteLifecycleHookVersionEnumTwoThousandAndEleven0101 GetDeleteLifecycleHookVersionEnum = "2011-01-01"
)

type GetDeleteLifecycleHookQueryParams struct {
	Action               GetDeleteLifecycleHookActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                            `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	LifecycleHookName    string                            `queryParam:"style=form,explode=true,name=LifecycleHookName"`
	Version              GetDeleteLifecycleHookVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteLifecycleHookHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteLifecycleHookRequest struct {
	QueryParams GetDeleteLifecycleHookQueryParams
	Headers     GetDeleteLifecycleHookHeaders
}

type GetDeleteLifecycleHookResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
