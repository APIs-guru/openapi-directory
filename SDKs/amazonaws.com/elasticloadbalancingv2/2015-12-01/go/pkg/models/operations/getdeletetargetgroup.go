package operations

type GetDeleteTargetGroupActionEnum string

const (
	GetDeleteTargetGroupActionEnumDeleteTargetGroup GetDeleteTargetGroupActionEnum = "DeleteTargetGroup"
)

type GetDeleteTargetGroupVersionEnum string

const (
	GetDeleteTargetGroupVersionEnumTwoThousandAndFifteen1201 GetDeleteTargetGroupVersionEnum = "2015-12-01"
)

type GetDeleteTargetGroupQueryParams struct {
	Action         GetDeleteTargetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	TargetGroupArn string                          `queryParam:"style=form,explode=true,name=TargetGroupArn"`
	Version        GetDeleteTargetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteTargetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteTargetGroupRequest struct {
	QueryParams GetDeleteTargetGroupQueryParams
	Headers     GetDeleteTargetGroupHeaders
}

type GetDeleteTargetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
