package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRetentionConfigurationsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeRetentionConfigurationsXAmzTargetEnum string

const (
	DescribeRetentionConfigurationsXAmzTargetEnumStarlingDoveServiceDescribeRetentionConfigurations DescribeRetentionConfigurationsXAmzTargetEnum = "StarlingDoveService.DescribeRetentionConfigurations"
)

type DescribeRetentionConfigurationsHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeRetentionConfigurationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeRetentionConfigurationsRequest struct {
	QueryParams DescribeRetentionConfigurationsQueryParams
	Headers     DescribeRetentionConfigurationsHeaders
	Request     shared.DescribeRetentionConfigurationsRequest `request:"mediaType=application/json"`
}

type DescribeRetentionConfigurationsResponse struct {
	ContentType                             string
	DescribeRetentionConfigurationsResponse *shared.DescribeRetentionConfigurationsResponse
	InvalidNextTokenException               *interface{}
	InvalidParameterValueException          *interface{}
	NoSuchRetentionConfigurationException   *interface{}
	StatusCode                              int64
}
