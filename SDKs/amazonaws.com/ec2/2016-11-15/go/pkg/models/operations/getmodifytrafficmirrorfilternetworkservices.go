package operations

import (
	"openapi/pkg/models/shared"
)

type GetModifyTrafficMirrorFilterNetworkServicesActionEnum string

const (
	GetModifyTrafficMirrorFilterNetworkServicesActionEnumModifyTrafficMirrorFilterNetworkServices GetModifyTrafficMirrorFilterNetworkServicesActionEnum = "ModifyTrafficMirrorFilterNetworkServices"
)

type GetModifyTrafficMirrorFilterNetworkServicesVersionEnum string

const (
	GetModifyTrafficMirrorFilterNetworkServicesVersionEnumTwoThousandAndSixteen1115 GetModifyTrafficMirrorFilterNetworkServicesVersionEnum = "2016-11-15"
)

type GetModifyTrafficMirrorFilterNetworkServicesQueryParams struct {
	Action                GetModifyTrafficMirrorFilterNetworkServicesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AddNetworkService     []shared.TrafficMirrorNetworkServiceEnum               `queryParam:"style=form,explode=true,name=AddNetworkService"`
	DryRun                *bool                                                  `queryParam:"style=form,explode=true,name=DryRun"`
	RemoveNetworkService  []shared.TrafficMirrorNetworkServiceEnum               `queryParam:"style=form,explode=true,name=RemoveNetworkService"`
	TrafficMirrorFilterID string                                                 `queryParam:"style=form,explode=true,name=TrafficMirrorFilterId"`
	Version               GetModifyTrafficMirrorFilterNetworkServicesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyTrafficMirrorFilterNetworkServicesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyTrafficMirrorFilterNetworkServicesRequest struct {
	QueryParams GetModifyTrafficMirrorFilterNetworkServicesQueryParams
	Headers     GetModifyTrafficMirrorFilterNetworkServicesHeaders
}

type GetModifyTrafficMirrorFilterNetworkServicesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
