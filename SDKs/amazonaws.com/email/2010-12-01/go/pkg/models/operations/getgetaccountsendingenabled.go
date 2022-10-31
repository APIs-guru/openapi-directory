package operations

type GetGetAccountSendingEnabledActionEnum string

const (
	GetGetAccountSendingEnabledActionEnumGetAccountSendingEnabled GetGetAccountSendingEnabledActionEnum = "GetAccountSendingEnabled"
)

type GetGetAccountSendingEnabledVersionEnum string

const (
	GetGetAccountSendingEnabledVersionEnumTwoThousandAndTen1201 GetGetAccountSendingEnabledVersionEnum = "2010-12-01"
)

type GetGetAccountSendingEnabledQueryParams struct {
	Action  GetGetAccountSendingEnabledActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetGetAccountSendingEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetAccountSendingEnabledHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGetAccountSendingEnabledRequest struct {
	QueryParams GetGetAccountSendingEnabledQueryParams
	Headers     GetGetAccountSendingEnabledHeaders
}

type GetGetAccountSendingEnabledResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
