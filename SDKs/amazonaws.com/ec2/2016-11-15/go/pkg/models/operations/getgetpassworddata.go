package operations

type GetGetPasswordDataActionEnum string

const (
	GetGetPasswordDataActionEnumGetPasswordData GetGetPasswordDataActionEnum = "GetPasswordData"
)

type GetGetPasswordDataVersionEnum string

const (
	GetGetPasswordDataVersionEnumTwoThousandAndSixteen1115 GetGetPasswordDataVersionEnum = "2016-11-15"
)

type GetGetPasswordDataQueryParams struct {
	Action     GetGetPasswordDataActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun     *bool                         `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID string                        `queryParam:"style=form,explode=true,name=InstanceId"`
	Version    GetGetPasswordDataVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetPasswordDataHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetPasswordDataRequest struct {
	QueryParams GetGetPasswordDataQueryParams
	Headers     GetGetPasswordDataHeaders
}

type GetGetPasswordDataResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
