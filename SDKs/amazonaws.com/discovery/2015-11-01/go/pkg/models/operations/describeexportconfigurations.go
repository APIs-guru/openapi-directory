package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeExportConfigurationsXAmzTargetEnum string

const (
	DescribeExportConfigurationsXAmzTargetEnumAwsPoseidonServiceV20151101DescribeExportConfigurations DescribeExportConfigurationsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.DescribeExportConfigurations"
)

type DescribeExportConfigurationsHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeExportConfigurationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeExportConfigurationsRequest struct {
	Headers DescribeExportConfigurationsHeaders
	Request shared.DescribeExportConfigurationsRequest `request:"mediaType=application/json"`
}

type DescribeExportConfigurationsResponse struct {
	AuthorizationErrorException          *interface{}
	ContentType                          string
	DescribeExportConfigurationsResponse *shared.DescribeExportConfigurationsResponse
	HomeRegionNotSetException            *interface{}
	InvalidParameterException            *interface{}
	InvalidParameterValueException       *interface{}
	ResourceNotFoundException            *interface{}
	ServerInternalErrorException         *interface{}
	StatusCode                           int64
}
