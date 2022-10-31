package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteReplicationTaskAssessmentRunXAmzTargetEnum string

const (
	DeleteReplicationTaskAssessmentRunXAmzTargetEnumAmazonDmSv20160101DeleteReplicationTaskAssessmentRun DeleteReplicationTaskAssessmentRunXAmzTargetEnum = "AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun"
)

type DeleteReplicationTaskAssessmentRunHeaders struct {
	XAmzAlgorithm     *string                                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteReplicationTaskAssessmentRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteReplicationTaskAssessmentRunRequest struct {
	Headers DeleteReplicationTaskAssessmentRunHeaders
	Request shared.DeleteReplicationTaskAssessmentRunMessage `request:"mediaType=application/json"`
}

type DeleteReplicationTaskAssessmentRunResponse struct {
	AccessDeniedFault                          *interface{}
	ContentType                                string
	DeleteReplicationTaskAssessmentRunResponse *shared.DeleteReplicationTaskAssessmentRunResponse
	InvalidResourceStateFault                  *interface{}
	ResourceNotFoundFault                      *interface{}
	StatusCode                                 int64
}
