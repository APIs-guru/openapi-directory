package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEvaluationResultsXAmzTargetEnum string

const (
	DeleteEvaluationResultsXAmzTargetEnumStarlingDoveServiceDeleteEvaluationResults DeleteEvaluationResultsXAmzTargetEnum = "StarlingDoveService.DeleteEvaluationResults"
)

type DeleteEvaluationResultsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEvaluationResultsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteEvaluationResultsRequest struct {
	Headers DeleteEvaluationResultsHeaders
	Request shared.DeleteEvaluationResultsRequest `request:"mediaType=application/json"`
}

type DeleteEvaluationResultsResponse struct {
	ContentType                     string
	DeleteEvaluationResultsResponse map[string]interface{}
	NoSuchConfigRuleException       *interface{}
	ResourceInUseException          *interface{}
	StatusCode                      int64
}
