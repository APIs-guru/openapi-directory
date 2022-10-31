package operations

import (
	"openapi/pkg/models/shared"
)

type GetUpdateScalingParametersActionEnum string

const (
	GetUpdateScalingParametersActionEnumUpdateScalingParameters GetUpdateScalingParametersActionEnum = "UpdateScalingParameters"
)

type GetUpdateScalingParametersScalingParameters struct {
	DesiredInstanceType     *shared.PartitionInstanceTypeEnum `queryParam:"name=DesiredInstanceType"`
	DesiredPartitionCount   *int64                            `queryParam:"name=DesiredPartitionCount"`
	DesiredReplicationCount *int64                            `queryParam:"name=DesiredReplicationCount"`
}

type GetUpdateScalingParametersVersionEnum string

const (
	GetUpdateScalingParametersVersionEnumTwoThousandAndThirteen0101 GetUpdateScalingParametersVersionEnum = "2013-01-01"
)

type GetUpdateScalingParametersQueryParams struct {
	Action            GetUpdateScalingParametersActionEnum        `queryParam:"style=form,explode=true,name=Action"`
	DomainName        string                                      `queryParam:"style=form,explode=true,name=DomainName"`
	ScalingParameters GetUpdateScalingParametersScalingParameters `queryParam:"style=form,explode=true,name=ScalingParameters"`
	Version           GetUpdateScalingParametersVersionEnum       `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateScalingParametersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetUpdateScalingParametersRequest struct {
	QueryParams GetUpdateScalingParametersQueryParams
	Headers     GetUpdateScalingParametersHeaders
}

type GetUpdateScalingParametersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
