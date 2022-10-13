package operations

type PostModifyTargetGroupActionEnum string

const (
	PostModifyTargetGroupActionEnumModifyTargetGroup PostModifyTargetGroupActionEnum = "ModifyTargetGroup"
)

type PostModifyTargetGroupVersionEnum string

const (
	PostModifyTargetGroupVersionEnumTwoThousandAndFifteen1201 PostModifyTargetGroupVersionEnum = "2015-12-01"
)

type PostModifyTargetGroupQueryParams struct {
	Action  PostModifyTargetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyTargetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyTargetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyTargetGroupRequest struct {
	QueryParams PostModifyTargetGroupQueryParams
	Headers     PostModifyTargetGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyTargetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
