package operations

type GetGetAccessKeyLastUsedActionEnum string

const (
	GetGetAccessKeyLastUsedActionEnumGetAccessKeyLastUsed GetGetAccessKeyLastUsedActionEnum = "GetAccessKeyLastUsed"
)

type GetGetAccessKeyLastUsedVersionEnum string

const (
	GetGetAccessKeyLastUsedVersionEnumTwoThousandAndTen0508 GetGetAccessKeyLastUsedVersionEnum = "2010-05-08"
)

type GetGetAccessKeyLastUsedQueryParams struct {
	AccessKeyID string                             `queryParam:"style=form,explode=true,name=AccessKeyId"`
	Action      GetGetAccessKeyLastUsedActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version     GetGetAccessKeyLastUsedVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetAccessKeyLastUsedHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGetAccessKeyLastUsedRequest struct {
	QueryParams GetGetAccessKeyLastUsedQueryParams
	Headers     GetGetAccessKeyLastUsedHeaders
}

type GetGetAccessKeyLastUsedResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
