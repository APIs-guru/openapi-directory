package operations

type ListDistributionsByWebACLId20171030PathParams struct {
	WebACLID string `pathParam:"style=simple,explode=false,name=WebACLId"`
}

type ListDistributionsByWebACLId20171030QueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListDistributionsByWebACLId20171030Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDistributionsByWebACLId20171030Request struct {
	PathParams  ListDistributionsByWebACLId20171030PathParams
	QueryParams ListDistributionsByWebACLId20171030QueryParams
	Headers     ListDistributionsByWebACLId20171030Headers
}

type ListDistributionsByWebACLId20171030Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
