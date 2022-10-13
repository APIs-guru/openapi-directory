package operations

import (
	"openapi/pkg/models/shared"
)

type CreateChangesetPathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
}

type CreateChangesetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateChangesetRequestBodyChangeTypeEnum string

const (
	CreateChangesetRequestBodyChangeTypeEnumReplace CreateChangesetRequestBodyChangeTypeEnum = "REPLACE"
	CreateChangesetRequestBodyChangeTypeEnumAppend  CreateChangesetRequestBodyChangeTypeEnum = "APPEND"
	CreateChangesetRequestBodyChangeTypeEnumModify  CreateChangesetRequestBodyChangeTypeEnum = "MODIFY"
)

type CreateChangesetRequestBodyFormatTypeEnum string

const (
	CreateChangesetRequestBodyFormatTypeEnumCsv     CreateChangesetRequestBodyFormatTypeEnum = "CSV"
	CreateChangesetRequestBodyFormatTypeEnumJSON    CreateChangesetRequestBodyFormatTypeEnum = "JSON"
	CreateChangesetRequestBodyFormatTypeEnumParquet CreateChangesetRequestBodyFormatTypeEnum = "PARQUET"
	CreateChangesetRequestBodyFormatTypeEnumXML     CreateChangesetRequestBodyFormatTypeEnum = "XML"
)

type CreateChangesetRequestBodySourceTypeEnum string

const (
	CreateChangesetRequestBodySourceTypeEnumS3 CreateChangesetRequestBodySourceTypeEnum = "S3"
)

type CreateChangesetRequestBody struct {
	ChangeType   CreateChangesetRequestBodyChangeTypeEnum  `json:"changeType"`
	FormatParams map[string]string                         `json:"formatParams"`
	FormatType   *CreateChangesetRequestBodyFormatTypeEnum `json:"formatType"`
	SourceParams map[string]string                         `json:"sourceParams"`
	SourceType   CreateChangesetRequestBodySourceTypeEnum  `json:"sourceType"`
	Tags         map[string]string                         `json:"tags"`
}

type CreateChangesetRequest struct {
	PathParams CreateChangesetPathParams
	Headers    CreateChangesetHeaders
	Request    CreateChangesetRequestBody `request:"mediaType=application/json"`
}

type CreateChangesetResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	CreateChangesetResponse   *shared.CreateChangesetResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
