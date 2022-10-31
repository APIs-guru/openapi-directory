package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGroupVersionPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type CreateGroupVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
}

type CreateGroupVersionRequestBody struct {
	ConnectorDefinitionVersionArn    *string `json:"ConnectorDefinitionVersionArn,omitempty"`
	CoreDefinitionVersionArn         *string `json:"CoreDefinitionVersionArn,omitempty"`
	DeviceDefinitionVersionArn       *string `json:"DeviceDefinitionVersionArn,omitempty"`
	FunctionDefinitionVersionArn     *string `json:"FunctionDefinitionVersionArn,omitempty"`
	LoggerDefinitionVersionArn       *string `json:"LoggerDefinitionVersionArn,omitempty"`
	ResourceDefinitionVersionArn     *string `json:"ResourceDefinitionVersionArn,omitempty"`
	SubscriptionDefinitionVersionArn *string `json:"SubscriptionDefinitionVersionArn,omitempty"`
}

type CreateGroupVersionRequest struct {
	PathParams CreateGroupVersionPathParams
	Headers    CreateGroupVersionHeaders
	Request    CreateGroupVersionRequestBody `request:"mediaType=application/json"`
}

type CreateGroupVersionResponse struct {
	BadRequestException        *interface{}
	ContentType                string
	CreateGroupVersionResponse *shared.CreateGroupVersionResponse
	StatusCode                 int64
}
