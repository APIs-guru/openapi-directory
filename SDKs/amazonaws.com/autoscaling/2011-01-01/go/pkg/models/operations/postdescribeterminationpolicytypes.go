package operations

type PostDescribeTerminationPolicyTypesActionEnum string

const (
	PostDescribeTerminationPolicyTypesActionEnumDescribeTerminationPolicyTypes PostDescribeTerminationPolicyTypesActionEnum = "DescribeTerminationPolicyTypes"
)

type PostDescribeTerminationPolicyTypesVersionEnum string

const (
	PostDescribeTerminationPolicyTypesVersionEnumTwoThousandAndEleven0101 PostDescribeTerminationPolicyTypesVersionEnum = "2011-01-01"
)

type PostDescribeTerminationPolicyTypesQueryParams struct {
	Action  PostDescribeTerminationPolicyTypesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeTerminationPolicyTypesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeTerminationPolicyTypesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeTerminationPolicyTypesRequest struct {
	QueryParams PostDescribeTerminationPolicyTypesQueryParams
	Headers     PostDescribeTerminationPolicyTypesHeaders
}

type PostDescribeTerminationPolicyTypesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
