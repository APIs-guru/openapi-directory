package operations

type GetModifyTargetGroupActionEnum string

const (
	GetModifyTargetGroupActionEnumModifyTargetGroup GetModifyTargetGroupActionEnum = "ModifyTargetGroup"
)

type GetModifyTargetGroupHealthCheckProtocolEnum string

const (
	GetModifyTargetGroupHealthCheckProtocolEnumHTTP   GetModifyTargetGroupHealthCheckProtocolEnum = "HTTP"
	GetModifyTargetGroupHealthCheckProtocolEnumHTTPS  GetModifyTargetGroupHealthCheckProtocolEnum = "HTTPS"
	GetModifyTargetGroupHealthCheckProtocolEnumTCP    GetModifyTargetGroupHealthCheckProtocolEnum = "TCP"
	GetModifyTargetGroupHealthCheckProtocolEnumTLS    GetModifyTargetGroupHealthCheckProtocolEnum = "TLS"
	GetModifyTargetGroupHealthCheckProtocolEnumUDP    GetModifyTargetGroupHealthCheckProtocolEnum = "UDP"
	GetModifyTargetGroupHealthCheckProtocolEnumTcpudp GetModifyTargetGroupHealthCheckProtocolEnum = "TCP_UDP"
	GetModifyTargetGroupHealthCheckProtocolEnumGeneve GetModifyTargetGroupHealthCheckProtocolEnum = "GENEVE"
)

// GetModifyTargetGroupMatcher
// The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.
type GetModifyTargetGroupMatcher struct {
	GrpcCode *string `queryParam:"name=GrpcCode"`
	HTTPCode *string `queryParam:"name=HttpCode"`
}

type GetModifyTargetGroupVersionEnum string

const (
	GetModifyTargetGroupVersionEnumTwoThousandAndFifteen1201 GetModifyTargetGroupVersionEnum = "2015-12-01"
)

type GetModifyTargetGroupQueryParams struct {
	Action                     GetModifyTargetGroupActionEnum               `queryParam:"style=form,explode=true,name=Action"`
	HealthCheckEnabled         *bool                                        `queryParam:"style=form,explode=true,name=HealthCheckEnabled"`
	HealthCheckIntervalSeconds *int64                                       `queryParam:"style=form,explode=true,name=HealthCheckIntervalSeconds"`
	HealthCheckPath            *string                                      `queryParam:"style=form,explode=true,name=HealthCheckPath"`
	HealthCheckPort            *string                                      `queryParam:"style=form,explode=true,name=HealthCheckPort"`
	HealthCheckProtocol        *GetModifyTargetGroupHealthCheckProtocolEnum `queryParam:"style=form,explode=true,name=HealthCheckProtocol"`
	HealthCheckTimeoutSeconds  *int64                                       `queryParam:"style=form,explode=true,name=HealthCheckTimeoutSeconds"`
	HealthyThresholdCount      *int64                                       `queryParam:"style=form,explode=true,name=HealthyThresholdCount"`
	Matcher                    *GetModifyTargetGroupMatcher                 `queryParam:"style=form,explode=true,name=Matcher"`
	TargetGroupArn             string                                       `queryParam:"style=form,explode=true,name=TargetGroupArn"`
	UnhealthyThresholdCount    *int64                                       `queryParam:"style=form,explode=true,name=UnhealthyThresholdCount"`
	Version                    GetModifyTargetGroupVersionEnum              `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyTargetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyTargetGroupRequest struct {
	QueryParams GetModifyTargetGroupQueryParams
	Headers     GetModifyTargetGroupHeaders
}

type GetModifyTargetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
