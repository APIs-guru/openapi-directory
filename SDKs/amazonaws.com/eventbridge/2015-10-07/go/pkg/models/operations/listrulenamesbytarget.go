package operations

import (
	"openapi/pkg/models/shared"
)

type ListRuleNamesByTargetXAmzTargetEnum string

const (
	ListRuleNamesByTargetXAmzTargetEnumAwsEventsListRuleNamesByTarget ListRuleNamesByTargetXAmzTargetEnum = "AWSEvents.ListRuleNamesByTarget"
)

type ListRuleNamesByTargetHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRuleNamesByTargetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListRuleNamesByTargetRequest struct {
	Headers ListRuleNamesByTargetHeaders
	Request shared.ListRuleNamesByTargetRequest `request:"mediaType=application/json"`
}

type ListRuleNamesByTargetResponse struct {
	ContentType                   string
	InternalException             *interface{}
	ListRuleNamesByTargetResponse *shared.ListRuleNamesByTargetResponse
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
