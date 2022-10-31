package operations

import (
	"openapi/pkg/models/shared"
)

type UnsubscribeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
