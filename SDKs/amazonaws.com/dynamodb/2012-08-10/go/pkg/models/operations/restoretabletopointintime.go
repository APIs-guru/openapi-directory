package operations

import (
	"openapi/pkg/models/shared"
)

type RestoreTableToPointInTimeXAmzTargetEnum string

const (
	RestoreTableToPointInTimeXAmzTargetEnumDynamoDb20120810RestoreTableToPointInTime RestoreTableToPointInTimeXAmzTargetEnum = "DynamoDB_20120810.RestoreTableToPointInTime"
)

type RestoreTableToPointInTimeHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RestoreTableToPointInTimeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RestoreTableToPointInTimeRequest struct {
	Headers RestoreTableToPointInTimeHeaders
	Request shared.RestoreTableToPointInTimeInput `request:"mediaType=application/json"`
}

type RestoreTableToPointInTimeResponse struct {
	ContentType                             string
	InternalServerError                     *interface{}
	InvalidRestoreTimeException             *interface{}
	LimitExceededException                  *interface{}
	PointInTimeRecoveryUnavailableException *interface{}
	RestoreTableToPointInTimeOutput         *shared.RestoreTableToPointInTimeOutput
	StatusCode                              int64
	TableAlreadyExistsException             *interface{}
	TableInUseException                     *interface{}
	TableNotFoundException                  *interface{}
}
