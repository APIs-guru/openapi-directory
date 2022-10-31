package operations

type GetDeleteListenerActionEnum string

const (
	GetDeleteListenerActionEnumDeleteListener GetDeleteListenerActionEnum = "DeleteListener"
)

type GetDeleteListenerVersionEnum string

const (
	GetDeleteListenerVersionEnumTwoThousandAndFifteen1201 GetDeleteListenerVersionEnum = "2015-12-01"
)

type GetDeleteListenerQueryParams struct {
	Action      GetDeleteListenerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ListenerArn string                       `queryParam:"style=form,explode=true,name=ListenerArn"`
	Version     GetDeleteListenerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteListenerHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteListenerRequest struct {
	QueryParams GetDeleteListenerQueryParams
	Headers     GetDeleteListenerHeaders
}

type GetDeleteListenerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
