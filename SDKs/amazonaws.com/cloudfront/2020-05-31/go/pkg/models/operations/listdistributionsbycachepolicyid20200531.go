package operations

type ListDistributionsByCachePolicyId20200531PathParams struct {
	CachePolicyID string `pathParam:"style=simple,explode=false,name=CachePolicyId"`
}

type ListDistributionsByCachePolicyId20200531QueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListDistributionsByCachePolicyId20200531Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDistributionsByCachePolicyId20200531Request struct {
	PathParams  ListDistributionsByCachePolicyId20200531PathParams
	QueryParams ListDistributionsByCachePolicyId20200531QueryParams
	Headers     ListDistributionsByCachePolicyId20200531Headers
}

type ListDistributionsByCachePolicyId20200531Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
