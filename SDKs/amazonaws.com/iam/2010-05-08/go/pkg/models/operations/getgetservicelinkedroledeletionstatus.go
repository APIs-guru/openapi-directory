package operations

type GetGetServiceLinkedRoleDeletionStatusActionEnum string

const (
	GetGetServiceLinkedRoleDeletionStatusActionEnumGetServiceLinkedRoleDeletionStatus GetGetServiceLinkedRoleDeletionStatusActionEnum = "GetServiceLinkedRoleDeletionStatus"
)

type GetGetServiceLinkedRoleDeletionStatusVersionEnum string

const (
	GetGetServiceLinkedRoleDeletionStatusVersionEnumTwoThousandAndTen0508 GetGetServiceLinkedRoleDeletionStatusVersionEnum = "2010-05-08"
)

type GetGetServiceLinkedRoleDeletionStatusQueryParams struct {
	Action         GetGetServiceLinkedRoleDeletionStatusActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DeletionTaskID string                                           `queryParam:"style=form,explode=true,name=DeletionTaskId"`
	Version        GetGetServiceLinkedRoleDeletionStatusVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetServiceLinkedRoleDeletionStatusHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGetServiceLinkedRoleDeletionStatusRequest struct {
	QueryParams GetGetServiceLinkedRoleDeletionStatusQueryParams
	Headers     GetGetServiceLinkedRoleDeletionStatusHeaders
}

type GetGetServiceLinkedRoleDeletionStatusResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
