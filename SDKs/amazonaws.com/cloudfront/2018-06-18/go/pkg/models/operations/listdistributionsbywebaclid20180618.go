package operations

type ListDistributionsByWebACLId20180618PathParams struct {
	WebACLID string `pathParam:"style=simple,explode=false,name=WebACLId"`
}

type ListDistributionsByWebACLId20180618QueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListDistributionsByWebACLId20180618Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDistributionsByWebACLId20180618Request struct {
	PathParams  ListDistributionsByWebACLId20180618PathParams
	QueryParams ListDistributionsByWebACLId20180618QueryParams
	Headers     ListDistributionsByWebACLId20180618Headers
}

type ListDistributionsByWebACLId20180618Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
