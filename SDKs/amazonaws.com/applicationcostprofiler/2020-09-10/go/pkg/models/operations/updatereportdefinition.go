package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateReportDefinitionPathParams struct {
	ReportID string `pathParam:"style=simple,explode=false,name=reportId"`
}

type UpdateReportDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateReportDefinitionRequestBodyDestinationS3Location struct {
	Bucket *string `json:"bucket"`
	Prefix *string `json:"prefix"`
}

type UpdateReportDefinitionRequestBodyFormatEnum string

const (
	UpdateReportDefinitionRequestBodyFormatEnumCsv     UpdateReportDefinitionRequestBodyFormatEnum = "CSV"
	UpdateReportDefinitionRequestBodyFormatEnumParquet UpdateReportDefinitionRequestBodyFormatEnum = "PARQUET"
)

type UpdateReportDefinitionRequestBodyReportFrequencyEnum string

const (
	UpdateReportDefinitionRequestBodyReportFrequencyEnumMonthly UpdateReportDefinitionRequestBodyReportFrequencyEnum = "MONTHLY"
	UpdateReportDefinitionRequestBodyReportFrequencyEnumDaily   UpdateReportDefinitionRequestBodyReportFrequencyEnum = "DAILY"
	UpdateReportDefinitionRequestBodyReportFrequencyEnumAll     UpdateReportDefinitionRequestBodyReportFrequencyEnum = "ALL"
)

type UpdateReportDefinitionRequestBody struct {
	DestinationS3Location UpdateReportDefinitionRequestBodyDestinationS3Location `json:"destinationS3Location"`
	Format                UpdateReportDefinitionRequestBodyFormatEnum            `json:"format"`
	ReportDescription     string                                                 `json:"reportDescription"`
	ReportFrequency       UpdateReportDefinitionRequestBodyReportFrequencyEnum   `json:"reportFrequency"`
}

type UpdateReportDefinitionRequest struct {
	PathParams UpdateReportDefinitionPathParams
	Headers    UpdateReportDefinitionHeaders
	Request    UpdateReportDefinitionRequestBody `request:"mediaType=application/json"`
}

type UpdateReportDefinitionResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	InternalServerException      *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
	UpdateReportDefinitionResult *shared.UpdateReportDefinitionResult
	ValidationException          *interface{}
}
