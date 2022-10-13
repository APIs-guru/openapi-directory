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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
