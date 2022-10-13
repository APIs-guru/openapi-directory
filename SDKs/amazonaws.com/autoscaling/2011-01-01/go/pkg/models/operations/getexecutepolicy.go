package operations

type GetExecutePolicyActionEnum string

const (
	GetExecutePolicyActionEnumExecutePolicy GetExecutePolicyActionEnum = "ExecutePolicy"
)

type GetExecutePolicyVersionEnum string

const (
	GetExecutePolicyVersionEnumTwoThousandAndEleven0101 GetExecutePolicyVersionEnum = "2011-01-01"
)

type GetExecutePolicyQueryParams struct {
	Action               GetExecutePolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName *string                     `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	BreachThreshold      *float64                    `queryParam:"style=form,explode=true,name=BreachThreshold"`
	HonorCooldown        *bool                       `queryParam:"style=form,explode=true,name=HonorCooldown"`
	MetricValue          *float64                    `queryParam:"style=form,explode=true,name=MetricValue"`
	PolicyName           string                      `queryParam:"style=form,explode=true,name=PolicyName"`
	Version              GetExecutePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetExecutePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetExecutePolicyRequest struct {
	QueryParams GetExecutePolicyQueryParams
	Headers     GetExecutePolicyHeaders
}

type GetExecutePolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
