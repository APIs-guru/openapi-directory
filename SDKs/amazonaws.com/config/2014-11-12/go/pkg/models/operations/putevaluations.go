package operations

import (
	"openapi/pkg/models/shared"
)

type PutEvaluationsXAmzTargetEnum string

const (
	PutEvaluationsXAmzTargetEnumStarlingDoveServicePutEvaluations PutEvaluationsXAmzTargetEnum = "StarlingDoveService.PutEvaluations"
)

type PutEvaluationsHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutEvaluationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
