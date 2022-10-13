package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEndpointSettingsQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribeEndpointSettingsXAmzTargetEnum string

const (
	DescribeEndpointSettingsXAmzTargetEnumAmazonDmSv20160101DescribeEndpointSettings DescribeEndpointSettingsXAmzTargetEnum = "AmazonDMSv20160101.DescribeEndpointSettings"
)

type DescribeEndpointSettingsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEndpointSettingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEndpointSettingsRequest struct {
	QueryParams DescribeEndpointSettingsQueryParams
	Headers     DescribeEndpointSettingsHeaders
	Request     shared.DescribeEndpointSettingsMessage `request:"mediaType=application/json"`
}

type DescribeEndpointSettingsResponse struct {
	ContentType                      string
	DescribeEndpointSettingsResponse *shared.DescribeEndpointSettingsResponse
	StatusCode                       int64
}
