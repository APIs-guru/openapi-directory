package operations

import (
	"openapi/pkg/models/shared"
)

type StartReplicationTaskAssessmentXAmzTargetEnum string

const (
	StartReplicationTaskAssessmentXAmzTargetEnumAmazonDmSv20160101StartReplicationTaskAssessment StartReplicationTaskAssessmentXAmzTargetEnum = "AmazonDMSv20160101.StartReplicationTaskAssessment"
)

type StartReplicationTaskAssessmentHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartReplicationTaskAssessmentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartReplicationTaskAssessmentRequest struct {
	Headers StartReplicationTaskAssessmentHeaders
	Request shared.StartReplicationTaskAssessmentMessage `request:"mediaType=application/json"`
}

type StartReplicationTaskAssessmentResponse struct {
	ContentType                            string
	InvalidResourceStateFault              *interface{}
	ResourceNotFoundFault                  *interface{}
	StartReplicationTaskAssessmentResponse *shared.StartReplicationTaskAssessmentResponse
	StatusCode                             int64
}
