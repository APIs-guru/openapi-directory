package operations

import (
	"openapi/pkg/models/shared"
)

type ListWebhooksQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListWebhooksXAmzTargetEnum string

const (
	ListWebhooksXAmzTargetEnumCodePipeline20150709ListWebhooks ListWebhooksXAmzTargetEnum = "CodePipeline_20150709.ListWebhooks"
)

type ListWebhooksHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListWebhooksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListWebhooksRequest struct {
	QueryParams ListWebhooksQueryParams
	Headers     ListWebhooksHeaders
	Request     shared.ListWebhooksInput `request:"mediaType=application/json"`
}

type ListWebhooksResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListWebhooksOutput        *shared.ListWebhooksOutput
	StatusCode                int64
	ValidationException       *interface{}
}
