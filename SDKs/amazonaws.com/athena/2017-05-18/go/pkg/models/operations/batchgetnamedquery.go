package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetNamedQueryXAmzTargetEnum string

const (
	BatchGetNamedQueryXAmzTargetEnumAmazonAthenaBatchGetNamedQuery BatchGetNamedQueryXAmzTargetEnum = "AmazonAthena.BatchGetNamedQuery"
)

type BatchGetNamedQueryHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetNamedQueryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetNamedQueryRequest struct {
	Headers BatchGetNamedQueryHeaders
	Request shared.BatchGetNamedQueryInput `request:"mediaType=application/json"`
}

type BatchGetNamedQueryResponse struct {
	BatchGetNamedQueryOutput *shared.BatchGetNamedQueryOutput
	ContentType              string
	InternalServerException  *interface{}
	InvalidRequestException  *interface{}
	StatusCode               int64
}
