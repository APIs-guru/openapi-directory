package operations

import (
	"openapi/pkg/models/shared"
)

type ExportTableToPointInTimeXAmzTargetEnum string

const (
	ExportTableToPointInTimeXAmzTargetEnumDynamoDb20120810ExportTableToPointInTime ExportTableToPointInTimeXAmzTargetEnum = "DynamoDB_20120810.ExportTableToPointInTime"
)

type ExportTableToPointInTimeHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ExportTableToPointInTimeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ExportTableToPointInTimeRequest struct {
	Headers ExportTableToPointInTimeHeaders
	Request shared.ExportTableToPointInTimeInput `request:"mediaType=application/json"`
}

type ExportTableToPointInTimeResponse struct {
	ContentType                             string
	ExportConflictException                 *interface{}
	ExportTableToPointInTimeOutput          *shared.ExportTableToPointInTimeOutput
	InternalServerError                     *interface{}
	InvalidExportTimeException              *interface{}
	LimitExceededException                  *interface{}
	PointInTimeRecoveryUnavailableException *interface{}
	StatusCode                              int64
	TableNotFoundException                  *interface{}
}
