package operations

type ListDistributionsByWebACLId20200531PathParams struct {
	WebACLID string `pathParam:"style=simple,explode=false,name=WebACLId"`
}

type ListDistributionsByWebACLId20200531QueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListDistributionsByWebACLId20200531Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDistributionsByWebACLId20200531Request struct {
	PathParams  ListDistributionsByWebACLId20200531PathParams
	QueryParams ListDistributionsByWebACLId20200531QueryParams
	Headers     ListDistributionsByWebACLId20200531Headers
}

type ListDistributionsByWebACLId20200531Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
