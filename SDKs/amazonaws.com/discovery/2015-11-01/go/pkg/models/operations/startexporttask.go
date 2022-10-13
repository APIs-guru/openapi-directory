package operations

import (
	"openapi/pkg/models/shared"
)

type StartExportTaskXAmzTargetEnum string

const (
	StartExportTaskXAmzTargetEnumAwsPoseidonServiceV20151101StartExportTask StartExportTaskXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.StartExportTask"
)

type StartExportTaskHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartExportTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartExportTaskRequest struct {
	Headers StartExportTaskHeaders
	Request shared.StartExportTaskRequest `request:"mediaType=application/json"`
}

type StartExportTaskResponse struct {
	AuthorizationErrorException    *interface{}
	ContentType                    string
	HomeRegionNotSetException      *interface{}
	InvalidParameterException      *interface{}
	InvalidParameterValueException *interface{}
	OperationNotPermittedException *interface{}
	ServerInternalErrorException   *interface{}
	StartExportTaskResponse        *shared.StartExportTaskResponse
	StatusCode                     int64
}
