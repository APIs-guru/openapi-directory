package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGroupVersionPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type CreateGroupVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

type CreateGroupVersionRequestBody struct {
	ConnectorDefinitionVersionArn    *string `json:"ConnectorDefinitionVersionArn"`
	CoreDefinitionVersionArn         *string `json:"CoreDefinitionVersionArn"`
	DeviceDefinitionVersionArn       *string `json:"DeviceDefinitionVersionArn"`
	FunctionDefinitionVersionArn     *string `json:"FunctionDefinitionVersionArn"`
	LoggerDefinitionVersionArn       *string `json:"LoggerDefinitionVersionArn"`
	ResourceDefinitionVersionArn     *string `json:"ResourceDefinitionVersionArn"`
	SubscriptionDefinitionVersionArn *string `json:"SubscriptionDefinitionVersionArn"`
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
