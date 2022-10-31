package operations

import (
	"openapi/pkg/models/shared"
)

type ExportConfigurationsXAmzTargetEnum string

const (
	ExportConfigurationsXAmzTargetEnumAwsPoseidonServiceV20151101ExportConfigurations ExportConfigurationsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.ExportConfigurations"
)

type ExportConfigurationsHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ExportConfigurationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
