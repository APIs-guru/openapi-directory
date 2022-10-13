package operations

type ListDistributionsByOriginRequestPolicyId20200531PathParams struct {
	OriginRequestPolicyID string `pathParam:"style=simple,explode=false,name=OriginRequestPolicyId"`
}

type ListDistributionsByOriginRequestPolicyId20200531QueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListDistributionsByOriginRequestPolicyId20200531Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDistributionsByOriginRequestPolicyId20200531Request struct {
	PathParams  ListDistributionsByOriginRequestPolicyId20200531PathParams
	QueryParams ListDistributionsByOriginRequestPolicyId20200531QueryParams
	Headers     ListDistributionsByOriginRequestPolicyId20200531Headers
}

type ListDistributionsByOriginRequestPolicyId20200531Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
