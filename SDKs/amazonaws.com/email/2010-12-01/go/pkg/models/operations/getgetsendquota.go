package operations

type GetGetSendQuotaActionEnum string

const (
	GetGetSendQuotaActionEnumGetSendQuota GetGetSendQuotaActionEnum = "GetSendQuota"
)

type GetGetSendQuotaVersionEnum string

const (
	GetGetSendQuotaVersionEnumTwoThousandAndTen1201 GetGetSendQuotaVersionEnum = "2010-12-01"
)

type GetGetSendQuotaQueryParams struct {
	Action  GetGetSendQuotaActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetGetSendQuotaVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetSendQuotaHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGetSendQuotaRequest struct {
	QueryParams GetGetSendQuotaQueryParams
	Headers     GetGetSendQuotaHeaders
}

type GetGetSendQuotaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
