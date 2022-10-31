package operations

type PostCreateTargetGroupActionEnum string

const (
	PostCreateTargetGroupActionEnumCreateTargetGroup PostCreateTargetGroupActionEnum = "CreateTargetGroup"
)

type PostCreateTargetGroupVersionEnum string

const (
	PostCreateTargetGroupVersionEnumTwoThousandAndFifteen1201 PostCreateTargetGroupVersionEnum = "2015-12-01"
)

type PostCreateTargetGroupQueryParams struct {
	Action  PostCreateTargetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateTargetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateTargetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateTargetGroupRequest struct {
	QueryParams PostCreateTargetGroupQueryParams
	Headers     PostCreateTargetGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateTargetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
