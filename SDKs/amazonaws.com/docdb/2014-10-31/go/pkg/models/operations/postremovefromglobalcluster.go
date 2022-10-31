package operations

type PostRemoveFromGlobalClusterActionEnum string

const (
	PostRemoveFromGlobalClusterActionEnumRemoveFromGlobalCluster PostRemoveFromGlobalClusterActionEnum = "RemoveFromGlobalCluster"
)

type PostRemoveFromGlobalClusterVersionEnum string

const (
	PostRemoveFromGlobalClusterVersionEnumTwoThousandAndFourteen1031 PostRemoveFromGlobalClusterVersionEnum = "2014-10-31"
)

type PostRemoveFromGlobalClusterQueryParams struct {
	Action  PostRemoveFromGlobalClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRemoveFromGlobalClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRemoveFromGlobalClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostRemoveFromGlobalClusterRequest struct {
	QueryParams PostRemoveFromGlobalClusterQueryParams
	Headers     PostRemoveFromGlobalClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRemoveFromGlobalClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
