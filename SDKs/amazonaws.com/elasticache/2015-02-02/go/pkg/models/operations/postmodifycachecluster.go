package operations

type PostModifyCacheClusterActionEnum string

const (
	PostModifyCacheClusterActionEnumModifyCacheCluster PostModifyCacheClusterActionEnum = "ModifyCacheCluster"
)

type PostModifyCacheClusterVersionEnum string

const (
	PostModifyCacheClusterVersionEnumTwoThousandAndFifteen0202 PostModifyCacheClusterVersionEnum = "2015-02-02"
)

type PostModifyCacheClusterQueryParams struct {
	Action  PostModifyCacheClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyCacheClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyCacheClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyCacheClusterRequest struct {
	QueryParams PostModifyCacheClusterQueryParams
	Headers     PostModifyCacheClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyCacheClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
