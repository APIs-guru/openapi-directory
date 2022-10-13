package operations

import (
	"openapi/pkg/models/shared"
)

type ExportConfigurationsXAmzTargetEnum string

const (
	ExportConfigurationsXAmzTargetEnumAwsPoseidonServiceV20151101ExportConfigurations ExportConfigurationsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.ExportConfigurations"
)

type ExportConfigurationsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ExportConfigurationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ExportConfigurationsRequest struct {
	Headers ExportConfigurationsHeaders
}

type ExportConfigurationsResponse struct {
	AuthorizationErrorException    *interface{}
	ContentType                    string
	ExportConfigurationsResponse   *shared.ExportConfigurationsResponse
	HomeRegionNotSetException      *interface{}
	InvalidParameterException      *interface{}
	InvalidParameterValueException *interface{}
	OperationNotPermittedException *interface{}
	ServerInternalErrorException   *interface{}
	StatusCode                     int64
}
