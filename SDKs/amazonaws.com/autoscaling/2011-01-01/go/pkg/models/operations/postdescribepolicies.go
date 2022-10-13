package operations

type PostDescribePoliciesActionEnum string

const (
	PostDescribePoliciesActionEnumDescribePolicies PostDescribePoliciesActionEnum = "DescribePolicies"
)

type PostDescribePoliciesVersionEnum string

const (
	PostDescribePoliciesVersionEnumTwoThousandAndEleven0101 PostDescribePoliciesVersionEnum = "2011-01-01"
)

type PostDescribePoliciesQueryParams struct {
	Action     PostDescribePoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxRecords *string                         `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken  *string                         `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribePoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribePoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribePoliciesRequest struct {
	QueryParams PostDescribePoliciesQueryParams
	Headers     PostDescribePoliciesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribePoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
