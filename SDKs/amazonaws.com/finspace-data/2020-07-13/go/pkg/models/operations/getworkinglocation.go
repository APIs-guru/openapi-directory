package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkingLocationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetWorkingLocationRequestBodyLocationTypeEnum string

const (
	GetWorkingLocationRequestBodyLocationTypeEnumIngestion GetWorkingLocationRequestBodyLocationTypeEnum = "INGESTION"
	GetWorkingLocationRequestBodyLocationTypeEnumSagemaker GetWorkingLocationRequestBodyLocationTypeEnum = "SAGEMAKER"
)

type GetWorkingLocationRequestBody struct {
	LocationType *GetWorkingLocationRequestBodyLocationTypeEnum `json:"locationType"`
}

type GetWorkingLocationRequest struct {
	Headers GetWorkingLocationHeaders
	Request GetWorkingLocationRequestBody `request:"mediaType=application/json"`
}

type GetWorkingLocationResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	GetWorkingLocationResponse *shared.GetWorkingLocationResponse
	InternalServerException    *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
