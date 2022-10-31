package operations

type GetDeleteLoginProfileActionEnum string

const (
	GetDeleteLoginProfileActionEnumDeleteLoginProfile GetDeleteLoginProfileActionEnum = "DeleteLoginProfile"
)

type GetDeleteLoginProfileVersionEnum string

const (
	GetDeleteLoginProfileVersionEnumTwoThousandAndTen0508 GetDeleteLoginProfileVersionEnum = "2010-05-08"
)

type GetDeleteLoginProfileQueryParams struct {
	Action   GetDeleteLoginProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	UserName string                           `queryParam:"style=form,explode=true,name=UserName"`
	Version  GetDeleteLoginProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteLoginProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteLoginProfileRequest struct {
	QueryParams GetDeleteLoginProfileQueryParams
	Headers     GetDeleteLoginProfileHeaders
}

type GetDeleteLoginProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
