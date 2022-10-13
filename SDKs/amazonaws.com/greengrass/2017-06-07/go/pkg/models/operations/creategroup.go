package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

type CreateGroupRequestBodyInitialVersion struct {
	ConnectorDefinitionVersionArn    *string `json:"ConnectorDefinitionVersionArn"`
	CoreDefinitionVersionArn         *string `json:"CoreDefinitionVersionArn"`
	DeviceDefinitionVersionArn       *string `json:"DeviceDefinitionVersionArn"`
	FunctionDefinitionVersionArn     *string `json:"FunctionDefinitionVersionArn"`
	LoggerDefinitionVersionArn       *string `json:"LoggerDefinitionVersionArn"`
	ResourceDefinitionVersionArn     *string `json:"ResourceDefinitionVersionArn"`
	SubscriptionDefinitionVersionArn *string `json:"SubscriptionDefinitionVersionArn"`
}

type CreateGroupRequestBody struct {
	InitialVersion *CreateGroupRequestBodyInitialVersion `json:"InitialVersion"`
	Name           string                                `json:"Name"`
	Tags           map[string]string                     `json:"tags"`
}

type CreateGroupRequest struct {
	Headers CreateGroupHeaders
	Request CreateGroupRequestBody `request:"mediaType=application/json"`
}

type CreateGroupResponse struct {
	BadRequestException *interface{}
	ContentType         string
	CreateGroupResponse *shared.CreateGroupResponse
	StatusCode          int64
}
