package operations

import (
	"openapi/pkg/models/shared"
)

type RestoreTableToPointInTimeXAmzTargetEnum string

const (
	RestoreTableToPointInTimeXAmzTargetEnumDynamoDb20120810RestoreTableToPointInTime RestoreTableToPointInTimeXAmzTargetEnum = "DynamoDB_20120810.RestoreTableToPointInTime"
)

type RestoreTableToPointInTimeHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RestoreTableToPointInTimeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
