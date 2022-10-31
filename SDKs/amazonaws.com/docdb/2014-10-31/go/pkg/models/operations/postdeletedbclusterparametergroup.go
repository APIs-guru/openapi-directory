package operations

type PostDeleteDbClusterParameterGroupActionEnum string

const (
	PostDeleteDbClusterParameterGroupActionEnumDeleteDbClusterParameterGroup PostDeleteDbClusterParameterGroupActionEnum = "DeleteDBClusterParameterGroup"
)

type PostDeleteDbClusterParameterGroupVersionEnum string

const (
	PostDeleteDbClusterParameterGroupVersionEnumTwoThousandAndFourteen1031 PostDeleteDbClusterParameterGroupVersionEnum = "2014-10-31"
)

type PostDeleteDbClusterParameterGroupQueryParams struct {
	Action  PostDeleteDbClusterParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDbClusterParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDbClusterParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteDbClusterParameterGroupRequest struct {
	QueryParams PostDeleteDbClusterParameterGroupQueryParams
	Headers     PostDeleteDbClusterParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDbClusterParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
