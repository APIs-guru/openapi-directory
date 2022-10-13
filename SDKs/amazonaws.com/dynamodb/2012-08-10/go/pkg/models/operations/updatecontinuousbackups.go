package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateContinuousBackupsXAmzTargetEnum string

const (
	UpdateContinuousBackupsXAmzTargetEnumDynamoDb20120810UpdateContinuousBackups UpdateContinuousBackupsXAmzTargetEnum = "DynamoDB_20120810.UpdateContinuousBackups"
)

type UpdateContinuousBackupsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateContinuousBackupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateContinuousBackupsRequest struct {
	Headers UpdateContinuousBackupsHeaders
	Request shared.UpdateContinuousBackupsInput `request:"mediaType=application/json"`
}

type UpdateContinuousBackupsResponse struct {
	ContentType                           string
	ContinuousBackupsUnavailableException *interface{}
	InternalServerError                   *interface{}
	StatusCode                            int64
	TableNotFoundException                *interface{}
	UpdateContinuousBackupsOutput         *shared.UpdateContinuousBackupsOutput
}
