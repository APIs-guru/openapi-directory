package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
}

// CreateGroupRequestBodyInitialVersion
// Information about a group version.
type CreateGroupRequestBodyInitialVersion struct {
	ConnectorDefinitionVersionArn    *string `json:"ConnectorDefinitionVersionArn,omitempty"`
	CoreDefinitionVersionArn         *string `json:"CoreDefinitionVersionArn,omitempty"`
	DeviceDefinitionVersionArn       *string `json:"DeviceDefinitionVersionArn,omitempty"`
	FunctionDefinitionVersionArn     *string `json:"FunctionDefinitionVersionArn,omitempty"`
	LoggerDefinitionVersionArn       *string `json:"LoggerDefinitionVersionArn,omitempty"`
	ResourceDefinitionVersionArn     *string `json:"ResourceDefinitionVersionArn,omitempty"`
	SubscriptionDefinitionVersionArn *string `json:"SubscriptionDefinitionVersionArn,omitempty"`
}

type CreateGroupRequestBody struct {
	InitialVersion *CreateGroupRequestBodyInitialVersion `json:"InitialVersion,omitempty"`
	Name           string                                `json:"Name"`
	Tags           map[string]string                     `json:"tags,omitempty"`
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
