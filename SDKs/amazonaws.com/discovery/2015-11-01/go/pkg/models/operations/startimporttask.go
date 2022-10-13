package operations

import (
	"openapi/pkg/models/shared"
)

type StartImportTaskXAmzTargetEnum string

const (
	StartImportTaskXAmzTargetEnumAwsPoseidonServiceV20151101StartImportTask StartImportTaskXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.StartImportTask"
)

type StartImportTaskHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartImportTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartImportTaskRequest struct {
	Headers StartImportTaskHeaders
	Request shared.StartImportTaskRequest `request:"mediaType=application/json"`
}

type StartImportTaskResponse struct {
	AuthorizationErrorException    *interface{}
	ContentType                    string
	HomeRegionNotSetException      *interface{}
	InvalidParameterException      *interface{}
	InvalidParameterValueException *interface{}
	ResourceInUseException         *interface{}
	ServerInternalErrorException   *interface{}
	StartImportTaskResponse        *shared.StartImportTaskResponse
	StatusCode                     int64
}
