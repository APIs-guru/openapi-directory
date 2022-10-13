package operations

type GetGetGroupActionEnum string

const (
	GetGetGroupActionEnumGetGroup GetGetGroupActionEnum = "GetGroup"
)

type GetGetGroupVersionEnum string

const (
	GetGetGroupVersionEnumTwoThousandAndTen0508 GetGetGroupVersionEnum = "2010-05-08"
)

type GetGetGroupQueryParams struct {
	Action    GetGetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GroupName string                 `queryParam:"style=form,explode=true,name=GroupName"`
	Marker    *string                `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems  *int64                 `queryParam:"style=form,explode=true,name=MaxItems"`
	Version   GetGetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetGroupRequest struct {
	QueryParams GetGetGroupQueryParams
	Headers     GetGetGroupHeaders
}

type GetGetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
