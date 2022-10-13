package operations

type GetDescribeTerminationPolicyTypesActionEnum string

const (
	GetDescribeTerminationPolicyTypesActionEnumDescribeTerminationPolicyTypes GetDescribeTerminationPolicyTypesActionEnum = "DescribeTerminationPolicyTypes"
)

type GetDescribeTerminationPolicyTypesVersionEnum string

const (
	GetDescribeTerminationPolicyTypesVersionEnumTwoThousandAndEleven0101 GetDescribeTerminationPolicyTypesVersionEnum = "2011-01-01"
)

type GetDescribeTerminationPolicyTypesQueryParams struct {
	Action  GetDescribeTerminationPolicyTypesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetDescribeTerminationPolicyTypesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeTerminationPolicyTypesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeTerminationPolicyTypesRequest struct {
	QueryParams GetDescribeTerminationPolicyTypesQueryParams
	Headers     GetDescribeTerminationPolicyTypesHeaders
}

type GetDescribeTerminationPolicyTypesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
