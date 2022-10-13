package operations

type PostDeleteTargetGroupActionEnum string

const (
	PostDeleteTargetGroupActionEnumDeleteTargetGroup PostDeleteTargetGroupActionEnum = "DeleteTargetGroup"
)

type PostDeleteTargetGroupVersionEnum string

const (
	PostDeleteTargetGroupVersionEnumTwoThousandAndFifteen1201 PostDeleteTargetGroupVersionEnum = "2015-12-01"
)

type PostDeleteTargetGroupQueryParams struct {
	Action  PostDeleteTargetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteTargetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteTargetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteTargetGroupRequest struct {
	QueryParams PostDeleteTargetGroupQueryParams
	Headers     PostDeleteTargetGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteTargetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
