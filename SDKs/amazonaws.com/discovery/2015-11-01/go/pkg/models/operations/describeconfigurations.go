package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConfigurationsXAmzTargetEnum string

const (
	DescribeConfigurationsXAmzTargetEnumAwsPoseidonServiceV20151101DescribeConfigurations DescribeConfigurationsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.DescribeConfigurations"
)

type DescribeConfigurationsHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConfigurationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeConfigurationsRequest struct {
	Headers DescribeConfigurationsHeaders
	Request shared.DescribeConfigurationsRequest `request:"mediaType=application/json"`
}

type DescribeConfigurationsResponse struct {
	AuthorizationErrorException    *interface{}
	ContentType                    string
	DescribeConfigurationsResponse *shared.DescribeConfigurationsResponse
	HomeRegionNotSetException      *interface{}
	InvalidParameterException      *interface{}
	InvalidParameterValueException *interface{}
	ServerInternalErrorException   *interface{}
	StatusCode                     int64
}
