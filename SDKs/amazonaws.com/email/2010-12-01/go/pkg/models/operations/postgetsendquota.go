package operations

type PostGetSendQuotaActionEnum string

const (
	PostGetSendQuotaActionEnumGetSendQuota PostGetSendQuotaActionEnum = "GetSendQuota"
)

type PostGetSendQuotaVersionEnum string

const (
	PostGetSendQuotaVersionEnumTwoThousandAndTen1201 PostGetSendQuotaVersionEnum = "2010-12-01"
)

type PostGetSendQuotaQueryParams struct {
	Action  PostGetSendQuotaActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetSendQuotaVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetSendQuotaHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostGetSendQuotaRequest struct {
	QueryParams PostGetSendQuotaQueryParams
	Headers     PostGetSendQuotaHeaders
}

type PostGetSendQuotaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
