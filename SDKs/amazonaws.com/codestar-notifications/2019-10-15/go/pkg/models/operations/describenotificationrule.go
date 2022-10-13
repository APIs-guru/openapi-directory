package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeNotificationRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeNotificationRuleRequestBody struct {
	Arn string `json:"Arn"`
}

type DescribeNotificationRuleRequest struct {
	Headers DescribeNotificationRuleHeaders
	Request DescribeNotificationRuleRequestBody `request:"mediaType=application/json"`
}

type DescribeNotificationRuleResponse struct {
	ContentType                    string
	DescribeNotificationRuleResult *shared.DescribeNotificationRuleResult
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
