package operations

type PostGetGroupActionEnum string

const (
	PostGetGroupActionEnumGetGroup PostGetGroupActionEnum = "GetGroup"
)

type PostGetGroupVersionEnum string

const (
	PostGetGroupVersionEnumTwoThousandAndTen0508 PostGetGroupVersionEnum = "2010-05-08"
)

type PostGetGroupQueryParams struct {
	Action   PostGetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                 `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                 `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostGetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostGetGroupRequest struct {
	QueryParams PostGetGroupQueryParams
	Headers     PostGetGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
