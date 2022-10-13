package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAPIKeyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAPIKeyRequestBody struct {
	CustomerID         *string           `json:"customerId"`
	Description        *string           `json:"description"`
	Enabled            *bool             `json:"enabled"`
	GenerateDistinctID *bool             `json:"generateDistinctId"`
	Name               *string           `json:"name"`
	StageKeys          []shared.StageKey `json:"stageKeys"`
	Tags               map[string]string `json:"tags"`
	Value              *string           `json:"value"`
}

type CreateAPIKeyRequest struct {
	Headers CreateAPIKeyHeaders
	Request CreateAPIKeyRequestBody `request:"mediaType=application/json"`
}

type CreateAPIKeyResponse struct {
	APIKey                   *shared.APIKey
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
