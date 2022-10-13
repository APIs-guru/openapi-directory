package operations

import (
	"openapi/pkg/models/shared"
)

type GetModifyTrafficMirrorSessionActionEnum string

const (
	GetModifyTrafficMirrorSessionActionEnumModifyTrafficMirrorSession GetModifyTrafficMirrorSessionActionEnum = "ModifyTrafficMirrorSession"
)

type GetModifyTrafficMirrorSessionVersionEnum string

const (
	GetModifyTrafficMirrorSessionVersionEnumTwoThousandAndSixteen1115 GetModifyTrafficMirrorSessionVersionEnum = "2016-11-15"
)

type GetModifyTrafficMirrorSessionQueryParams struct {
	Action                 GetModifyTrafficMirrorSessionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Description            *string                                  `queryParam:"style=form,explode=true,name=Description"`
	DryRun                 *bool                                    `queryParam:"style=form,explode=true,name=DryRun"`
	PacketLength           *int64                                   `queryParam:"style=form,explode=true,name=PacketLength"`
	RemoveField            []shared.TrafficMirrorSessionFieldEnum   `queryParam:"style=form,explode=true,name=RemoveField"`
	SessionNumber          *int64                                   `queryParam:"style=form,explode=true,name=SessionNumber"`
	TrafficMirrorFilterID  *string                                  `queryParam:"style=form,explode=true,name=TrafficMirrorFilterId"`
	TrafficMirrorSessionID string                                   `queryParam:"style=form,explode=true,name=TrafficMirrorSessionId"`
	TrafficMirrorTargetID  *string                                  `queryParam:"style=form,explode=true,name=TrafficMirrorTargetId"`
	Version                GetModifyTrafficMirrorSessionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VirtualNetworkID       *int64                                   `queryParam:"style=form,explode=true,name=VirtualNetworkId"`
}

type GetModifyTrafficMirrorSessionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyTrafficMirrorSessionRequest struct {
	QueryParams GetModifyTrafficMirrorSessionQueryParams
	Headers     GetModifyTrafficMirrorSessionHeaders
}

type GetModifyTrafficMirrorSessionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
