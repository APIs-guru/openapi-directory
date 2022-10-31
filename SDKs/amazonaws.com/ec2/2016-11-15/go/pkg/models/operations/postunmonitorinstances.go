package operations

type PostUnmonitorInstancesActionEnum string

const (
	PostUnmonitorInstancesActionEnumUnmonitorInstances PostUnmonitorInstancesActionEnum = "UnmonitorInstances"
)

type PostUnmonitorInstancesVersionEnum string

const (
	PostUnmonitorInstancesVersionEnumTwoThousandAndSixteen1115 PostUnmonitorInstancesVersionEnum = "2016-11-15"
)

type PostUnmonitorInstancesQueryParams struct {
	Action  PostUnmonitorInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUnmonitorInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUnmonitorInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostUnmonitorInstancesRequest struct {
	QueryParams PostUnmonitorInstancesQueryParams
	Headers     PostUnmonitorInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUnmonitorInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
