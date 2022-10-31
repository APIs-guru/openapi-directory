package operations

type PostDeleteGlobalClusterActionEnum string

const (
	PostDeleteGlobalClusterActionEnumDeleteGlobalCluster PostDeleteGlobalClusterActionEnum = "DeleteGlobalCluster"
)

type PostDeleteGlobalClusterVersionEnum string

const (
	PostDeleteGlobalClusterVersionEnumTwoThousandAndFourteen1031 PostDeleteGlobalClusterVersionEnum = "2014-10-31"
)

type PostDeleteGlobalClusterQueryParams struct {
	Action  PostDeleteGlobalClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteGlobalClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteGlobalClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteGlobalClusterRequest struct {
	QueryParams PostDeleteGlobalClusterQueryParams
	Headers     PostDeleteGlobalClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteGlobalClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
