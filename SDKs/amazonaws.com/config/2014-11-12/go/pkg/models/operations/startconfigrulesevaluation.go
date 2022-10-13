package operations

import (
	"openapi/pkg/models/shared"
)

type StartConfigRulesEvaluationXAmzTargetEnum string

const (
	StartConfigRulesEvaluationXAmzTargetEnumStarlingDoveServiceStartConfigRulesEvaluation StartConfigRulesEvaluationXAmzTargetEnum = "StarlingDoveService.StartConfigRulesEvaluation"
)

type StartConfigRulesEvaluationHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartConfigRulesEvaluationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartConfigRulesEvaluationRequest struct {
	Headers StartConfigRulesEvaluationHeaders
	Request shared.StartConfigRulesEvaluationRequest `request:"mediaType=application/json"`
}

type StartConfigRulesEvaluationResponse struct {
	ContentType                        string
	InvalidParameterValueException     *interface{}
	LimitExceededException             *interface{}
	NoSuchConfigRuleException          *interface{}
	ResourceInUseException             *interface{}
	StartConfigRulesEvaluationResponse map[string]interface{}
	StatusCode                         int64
}
