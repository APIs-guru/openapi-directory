package operations

import (
	"openapi/pkg/models/shared"
)

type CancelReplicationTaskAssessmentRunXAmzTargetEnum string

const (
	CancelReplicationTaskAssessmentRunXAmzTargetEnumAmazonDmSv20160101CancelReplicationTaskAssessmentRun CancelReplicationTaskAssessmentRunXAmzTargetEnum = "AmazonDMSv20160101.CancelReplicationTaskAssessmentRun"
)

type CancelReplicationTaskAssessmentRunHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelReplicationTaskAssessmentRunXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelReplicationTaskAssessmentRunRequest struct {
	Headers CancelReplicationTaskAssessmentRunHeaders
	Request shared.CancelReplicationTaskAssessmentRunMessage `request:"mediaType=application/json"`
}

type CancelReplicationTaskAssessmentRunResponse struct {
	AccessDeniedFault                          *interface{}
	CancelReplicationTaskAssessmentRunResponse *shared.CancelReplicationTaskAssessmentRunResponse
	ContentType                                string
	InvalidResourceStateFault                  *interface{}
	ResourceNotFoundFault                      *interface{}
	StatusCode                                 int64
}
