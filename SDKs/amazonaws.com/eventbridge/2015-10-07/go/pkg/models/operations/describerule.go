package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRuleXAmzTargetEnum string

const (
	DescribeRuleXAmzTargetEnumAwsEventsDescribeRule DescribeRuleXAmzTargetEnum = "AWSEvents.DescribeRule"
)

type DescribeRuleHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeRuleRequest struct {
	Headers DescribeRuleHeaders
	Request shared.DescribeRuleRequest `request:"mediaType=application/json"`
}

type DescribeRuleResponse struct {
	ContentType               string
	DescribeRuleResponse      *shared.DescribeRuleResponse
	InternalException         *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
