package operations

type GetSetInstanceHealthActionEnum string

const (
	GetSetInstanceHealthActionEnumSetInstanceHealth GetSetInstanceHealthActionEnum = "SetInstanceHealth"
)

type GetSetInstanceHealthVersionEnum string

const (
	GetSetInstanceHealthVersionEnumTwoThousandAndEleven0101 GetSetInstanceHealthVersionEnum = "2011-01-01"
)

type GetSetInstanceHealthQueryParams struct {
	Action                   GetSetInstanceHealthActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	HealthStatus             string                          `queryParam:"style=form,explode=true,name=HealthStatus"`
	InstanceID               string                          `queryParam:"style=form,explode=true,name=InstanceId"`
	ShouldRespectGracePeriod *bool                           `queryParam:"style=form,explode=true,name=ShouldRespectGracePeriod"`
	Version                  GetSetInstanceHealthVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetSetInstanceHealthHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSetInstanceHealthRequest struct {
	QueryParams GetSetInstanceHealthQueryParams
	Headers     GetSetInstanceHealthHeaders
}

type GetSetInstanceHealthResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
