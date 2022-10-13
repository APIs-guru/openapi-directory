package operations

import (
	"openapi/pkg/models/shared"
)

type PutExternalEvaluationXAmzTargetEnum string

const (
	PutExternalEvaluationXAmzTargetEnumStarlingDoveServicePutExternalEvaluation PutExternalEvaluationXAmzTargetEnum = "StarlingDoveService.PutExternalEvaluation"
)

type PutExternalEvaluationHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutExternalEvaluationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutExternalEvaluationRequest struct {
	Headers PutExternalEvaluationHeaders
	Request shared.PutExternalEvaluationRequest `request:"mediaType=application/json"`
}

type PutExternalEvaluationResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	NoSuchConfigRuleException      *interface{}
	PutExternalEvaluationResponse  map[string]interface{}
	StatusCode                     int64
}
