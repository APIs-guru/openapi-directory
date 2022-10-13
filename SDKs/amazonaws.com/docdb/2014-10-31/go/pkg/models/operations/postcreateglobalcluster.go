package operations

type PostCreateGlobalClusterActionEnum string

const (
	PostCreateGlobalClusterActionEnumCreateGlobalCluster PostCreateGlobalClusterActionEnum = "CreateGlobalCluster"
)

type PostCreateGlobalClusterVersionEnum string

const (
	PostCreateGlobalClusterVersionEnumTwoThousandAndFourteen1031 PostCreateGlobalClusterVersionEnum = "2014-10-31"
)

type PostCreateGlobalClusterQueryParams struct {
	Action  PostCreateGlobalClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateGlobalClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateGlobalClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateGlobalClusterRequest struct {
	QueryParams PostCreateGlobalClusterQueryParams
	Headers     PostCreateGlobalClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateGlobalClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
