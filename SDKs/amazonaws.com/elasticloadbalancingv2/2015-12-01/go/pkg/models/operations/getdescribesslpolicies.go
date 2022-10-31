package operations

type GetDescribeSslPoliciesActionEnum string

const (
	GetDescribeSslPoliciesActionEnumDescribeSslPolicies GetDescribeSslPoliciesActionEnum = "DescribeSSLPolicies"
)

type GetDescribeSslPoliciesVersionEnum string

const (
	GetDescribeSslPoliciesVersionEnumTwoThousandAndFifteen1201 GetDescribeSslPoliciesVersionEnum = "2015-12-01"
)

type GetDescribeSslPoliciesQueryParams struct {
	Action   GetDescribeSslPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                           `queryParam:"style=form,explode=true,name=Marker"`
	Names    []string                          `queryParam:"style=form,explode=true,name=Names"`
	PageSize *int64                            `queryParam:"style=form,explode=true,name=PageSize"`
	Version  GetDescribeSslPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeSslPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeSslPoliciesRequest struct {
	QueryParams GetDescribeSslPoliciesQueryParams
	Headers     GetDescribeSslPoliciesHeaders
}

type GetDescribeSslPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
