package operations

import (
	"openapi/pkg/models/shared"
)

type StartReplicationTaskAssessmentRunXAmzTargetEnum string

const (
	StartReplicationTaskAssessmentRunXAmzTargetEnumAmazonDmSv20160101StartReplicationTaskAssessmentRun StartReplicationTaskAssessmentRunXAmzTargetEnum = "AmazonDMSv20160101.StartReplicationTaskAssessmentRun"
)

type StartReplicationTaskAssessmentRunHeaders struct {
	XAmzAlgorithm     *string                                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartReplicationTaskAssessmentRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartReplicationTaskAssessmentRunRequest struct {
	Headers StartReplicationTaskAssessmentRunHeaders
	Request shared.StartReplicationTaskAssessmentRunMessage `request:"mediaType=application/json"`
}

type StartReplicationTaskAssessmentRunResponse struct {
	AccessDeniedFault                         *interface{}
	ContentType                               string
	InvalidResourceStateFault                 *interface{}
	KmsAccessDeniedFault                      *interface{}
	KmsDisabledFault                          *interface{}
	KmsFault                                  *interface{}
	KmsInvalidStateFault                      *interface{}
	KmsKeyNotAccessibleFault                  *interface{}
	KmsNotFoundFault                          *interface{}
	ResourceAlreadyExistsFault                *interface{}
	ResourceNotFoundFault                     *interface{}
	S3AccessDeniedFault                       *interface{}
	S3ResourceNotFoundFault                   *interface{}
	StartReplicationTaskAssessmentRunResponse *shared.StartReplicationTaskAssessmentRunResponse
	StatusCode                                int64
}
