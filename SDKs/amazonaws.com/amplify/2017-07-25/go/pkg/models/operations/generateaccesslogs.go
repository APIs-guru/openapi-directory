package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GenerateAccessLogsPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type GenerateAccessLogsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GenerateAccessLogsRequestBody struct {
	DomainName string     `json:"domainName"`
	EndTime    *time.Time `json:"endTime,omitempty"`
	StartTime  *time.Time `json:"startTime,omitempty"`
}

type GenerateAccessLogsRequest struct {
	PathParams GenerateAccessLogsPathParams
	Headers    GenerateAccessLogsHeaders
	Request    GenerateAccessLogsRequestBody `request:"mediaType=application/json"`
}

type GenerateAccessLogsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GenerateAccessLogsResult *shared.GenerateAccessLogsResult
	InternalFailureException *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
