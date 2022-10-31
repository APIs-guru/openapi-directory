package operations

import (
	"openapi/pkg/models/shared"
)

type StopContinuousExportXAmzTargetEnum string

const (
	StopContinuousExportXAmzTargetEnumAwsPoseidonServiceV20151101StopContinuousExport StopContinuousExportXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.StopContinuousExport"
)

type StopContinuousExportHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopContinuousExportXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopContinuousExportRequest struct {
	Headers StopContinuousExportHeaders
	Request shared.StopContinuousExportRequest `request:"mediaType=application/json"`
}

type StopContinuousExportResponse struct {
	AuthorizationErrorException    *interface{}
	ContentType                    string
	HomeRegionNotSetException      *interface{}
	InvalidParameterException      *interface{}
	InvalidParameterValueException *interface{}
	OperationNotPermittedException *interface{}
	ResourceInUseException         *interface{}
	ResourceNotFoundException      *interface{}
	ServerInternalErrorException   *interface{}
	StatusCode                     int64
	StopContinuousExportResponse   *shared.StopContinuousExportResponse
}
