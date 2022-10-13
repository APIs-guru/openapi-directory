package operations

import (
	"openapi/pkg/models/shared"
)

type PutEvaluationsXAmzTargetEnum string

const (
	PutEvaluationsXAmzTargetEnumStarlingDoveServicePutEvaluations PutEvaluationsXAmzTargetEnum = "StarlingDoveService.PutEvaluations"
)

type PutEvaluationsHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutEvaluationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutEvaluationsRequest struct {
	Headers PutEvaluationsHeaders
	Request shared.PutEvaluationsRequest `request:"mediaType=application/json"`
}

type PutEvaluationsResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	InvalidResultTokenException    *interface{}
	NoSuchConfigRuleException      *interface{}
	PutEvaluationsResponse         *shared.PutEvaluationsResponse
	StatusCode                     int64
}
