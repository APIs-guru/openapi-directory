package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetApplicationRevisionsXAmzTargetEnum string

const (
	BatchGetApplicationRevisionsXAmzTargetEnumCodeDeploy20141006BatchGetApplicationRevisions BatchGetApplicationRevisionsXAmzTargetEnum = "CodeDeploy_20141006.BatchGetApplicationRevisions"
)

type BatchGetApplicationRevisionsHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetApplicationRevisionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetApplicationRevisionsRequest struct {
	Headers BatchGetApplicationRevisionsHeaders
	Request shared.BatchGetApplicationRevisionsInput `request:"mediaType=application/json"`
}

type BatchGetApplicationRevisionsResponse struct {
	ApplicationDoesNotExistException   *interface{}
	ApplicationNameRequiredException   *interface{}
	BatchGetApplicationRevisionsOutput *shared.BatchGetApplicationRevisionsOutput
	BatchLimitExceededException        *interface{}
	ContentType                        string
	InvalidApplicationNameException    *interface{}
	InvalidRevisionException           *interface{}
	RevisionRequiredException          *interface{}
	StatusCode                         int64
}
