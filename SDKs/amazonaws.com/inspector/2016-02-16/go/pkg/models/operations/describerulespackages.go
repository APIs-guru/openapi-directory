package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRulesPackagesXAmzTargetEnum string

const (
	DescribeRulesPackagesXAmzTargetEnumInspectorServiceDescribeRulesPackages DescribeRulesPackagesXAmzTargetEnum = "InspectorService.DescribeRulesPackages"
)

type DescribeRulesPackagesHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeRulesPackagesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeRulesPackagesRequest struct {
	Headers DescribeRulesPackagesHeaders
	Request shared.DescribeRulesPackagesRequest `request:"mediaType=application/json"`
}

type DescribeRulesPackagesResponse struct {
	ContentType                   string
	DescribeRulesPackagesResponse *shared.DescribeRulesPackagesResponse
	InternalException             *interface{}
	InvalidInputException         *interface{}
	StatusCode                    int64
}
