package operations

import (
	"openapi/pkg/models/shared"
)

type StartContinuousExportXAmzTargetEnum string

const (
	StartContinuousExportXAmzTargetEnumAwsPoseidonServiceV20151101StartContinuousExport StartContinuousExportXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.StartContinuousExport"
)

type StartContinuousExportHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartContinuousExportXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartContinuousExportRequest struct {
	Headers StartContinuousExportHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type StartContinuousExportResponse struct {
	AuthorizationErrorException    *interface{}
	ConflictErrorException         *interface{}
	ContentType                    string
	HomeRegionNotSetException      *interface{}
	InvalidParameterException      *interface{}
	InvalidParameterValueException *interface{}
	OperationNotPermittedException *interface{}
	ResourceInUseException         *interface{}
	ServerInternalErrorException   *interface{}
	StartContinuousExportResponse  *shared.StartContinuousExportResponse
	StatusCode                     int64
}
