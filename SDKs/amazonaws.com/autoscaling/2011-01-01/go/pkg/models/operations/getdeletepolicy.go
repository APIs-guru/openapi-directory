package operations

type GetDeletePolicyActionEnum string

const (
	GetDeletePolicyActionEnumDeletePolicy GetDeletePolicyActionEnum = "DeletePolicy"
)

type GetDeletePolicyVersionEnum string

const (
	GetDeletePolicyVersionEnumTwoThousandAndEleven0101 GetDeletePolicyVersionEnum = "2011-01-01"
)

type GetDeletePolicyQueryParams struct {
	Action               GetDeletePolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName *string                    `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	PolicyName           string                     `queryParam:"style=form,explode=true,name=PolicyName"`
	Version              GetDeletePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeletePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeletePolicyRequest struct {
	QueryParams GetDeletePolicyQueryParams
	Headers     GetDeletePolicyHeaders
}

type GetDeletePolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
