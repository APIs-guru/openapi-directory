package operations

type PostStartDbClusterActionEnum string

const (
	PostStartDbClusterActionEnumStartDbCluster PostStartDbClusterActionEnum = "StartDBCluster"
)

type PostStartDbClusterVersionEnum string

const (
	PostStartDbClusterVersionEnumTwoThousandAndFourteen1031 PostStartDbClusterVersionEnum = "2014-10-31"
)

type PostStartDbClusterQueryParams struct {
	Action  PostStartDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostStartDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostStartDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostStartDbClusterRequest struct {
	QueryParams PostStartDbClusterQueryParams
	Headers     PostStartDbClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostStartDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
