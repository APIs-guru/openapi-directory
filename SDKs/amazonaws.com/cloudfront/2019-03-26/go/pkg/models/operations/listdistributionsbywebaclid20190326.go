package operations

type ListDistributionsByWebACLId20190326PathParams struct {
	WebACLID string `pathParam:"style=simple,explode=false,name=WebACLId"`
}

type ListDistributionsByWebACLId20190326QueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListDistributionsByWebACLId20190326Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDistributionsByWebACLId20190326Request struct {
	PathParams  ListDistributionsByWebACLId20190326PathParams
	QueryParams ListDistributionsByWebACLId20190326QueryParams
	Headers     ListDistributionsByWebACLId20190326Headers
}

type ListDistributionsByWebACLId20190326Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
