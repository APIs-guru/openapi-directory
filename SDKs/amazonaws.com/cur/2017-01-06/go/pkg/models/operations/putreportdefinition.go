package operations

import (
	"openapi/pkg/models/shared"
)

type PutReportDefinitionXAmzTargetEnum string

const (
	PutReportDefinitionXAmzTargetEnumAwsOrigamiServiceGatewayServicePutReportDefinition PutReportDefinitionXAmzTargetEnum = "AWSOrigamiServiceGatewayService.PutReportDefinition"
)

type PutReportDefinitionHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutReportDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutReportDefinitionRequest struct {
	Headers PutReportDefinitionHeaders
	Request shared.PutReportDefinitionRequest `request:"mediaType=application/json"`
}

type PutReportDefinitionResponse struct {
	ContentType                  string
	DuplicateReportNameException *interface{}
	InternalErrorException       *interface{}
	PutReportDefinitionResponse  map[string]interface{}
	ReportLimitReachedException  *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
