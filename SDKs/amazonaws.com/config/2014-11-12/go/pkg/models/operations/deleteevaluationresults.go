package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEvaluationResultsXAmzTargetEnum string

const (
	DeleteEvaluationResultsXAmzTargetEnumStarlingDoveServiceDeleteEvaluationResults DeleteEvaluationResultsXAmzTargetEnum = "StarlingDoveService.DeleteEvaluationResults"
)

type DeleteEvaluationResultsHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEvaluationResultsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
