package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteReportDefinitionXAmzTargetEnum string

const (
	DeleteReportDefinitionXAmzTargetEnumAwsOrigamiServiceGatewayServiceDeleteReportDefinition DeleteReportDefinitionXAmzTargetEnum = "AWSOrigamiServiceGatewayService.DeleteReportDefinition"
)

type DeleteReportDefinitionHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteReportDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteReportDefinitionRequest struct {
	Headers DeleteReportDefinitionHeaders
	Request shared.DeleteReportDefinitionRequest `request:"mediaType=application/json"`
}

type DeleteReportDefinitionResponse struct {
	ContentType                    string
	DeleteReportDefinitionResponse *shared.DeleteReportDefinitionResponse
	InternalErrorException         *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
