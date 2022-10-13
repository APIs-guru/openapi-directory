package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyReportDefinitionXAmzTargetEnum string

const (
	ModifyReportDefinitionXAmzTargetEnumAwsOrigamiServiceGatewayServiceModifyReportDefinition ModifyReportDefinitionXAmzTargetEnum = "AWSOrigamiServiceGatewayService.ModifyReportDefinition"
)

type ModifyReportDefinitionHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyReportDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyReportDefinitionRequest struct {
	Headers ModifyReportDefinitionHeaders
	Request shared.ModifyReportDefinitionRequest `request:"mediaType=application/json"`
}

type ModifyReportDefinitionResponse struct {
	ContentType                    string
	InternalErrorException         *interface{}
	ModifyReportDefinitionResponse map[string]interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
