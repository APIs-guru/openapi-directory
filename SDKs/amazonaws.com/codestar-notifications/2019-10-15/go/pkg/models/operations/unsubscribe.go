package operations

import (
	"openapi/pkg/models/shared"
)

type UnsubscribeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UnsubscribeRequestBody struct {
	Arn           string `json:"Arn"`
	TargetAddress string `json:"TargetAddress"`
}

type UnsubscribeRequest struct {
	Headers UnsubscribeHeaders
	Request UnsubscribeRequestBody `request:"mediaType=application/json"`
}

type UnsubscribeResponse struct {
	ContentType         string
	StatusCode          int64
	UnsubscribeResult   *shared.UnsubscribeResult
	ValidationException *interface{}
}
