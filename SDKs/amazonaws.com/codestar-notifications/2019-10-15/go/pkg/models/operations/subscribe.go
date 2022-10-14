package operations

import (
	"openapi/pkg/models/shared"
)

type SubscribeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SubscribeRequestBodyTarget struct {
	TargetAddress *string `json:"TargetAddress,omitempty"`
	TargetType    *string `json:"TargetType,omitempty"`
}

type SubscribeRequestBody struct {
	Arn                string                     `json:"Arn"`
	ClientRequestToken *string                    `json:"ClientRequestToken,omitempty"`
	Target             SubscribeRequestBodyTarget `json:"Target"`
}

type SubscribeRequest struct {
	Headers SubscribeHeaders
	Request SubscribeRequestBody `request:"mediaType=application/json"`
}

type SubscribeResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	SubscribeResult           *shared.SubscribeResult
	ValidationException       *interface{}
}
