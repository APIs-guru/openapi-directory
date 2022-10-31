package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNotificationRuleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateNotificationRuleRequestBodyDetailTypeEnum string

const (
	CreateNotificationRuleRequestBodyDetailTypeEnumBasic CreateNotificationRuleRequestBodyDetailTypeEnum = "BASIC"
	CreateNotificationRuleRequestBodyDetailTypeEnumFull  CreateNotificationRuleRequestBodyDetailTypeEnum = "FULL"
)

type CreateNotificationRuleRequestBodyStatusEnum string

const (
	CreateNotificationRuleRequestBodyStatusEnumEnabled  CreateNotificationRuleRequestBodyStatusEnum = "ENABLED"
	CreateNotificationRuleRequestBodyStatusEnumDisabled CreateNotificationRuleRequestBodyStatusEnum = "DISABLED"
)

type CreateNotificationRuleRequestBody struct {
	ClientRequestToken *string                                         `json:"ClientRequestToken,omitempty"`
	DetailType         CreateNotificationRuleRequestBodyDetailTypeEnum `json:"DetailType"`
	EventTypeIds       []string                                        `json:"EventTypeIds"`
	Name               string                                          `json:"Name"`
	Resource           string                                          `json:"Resource"`
	Status             *CreateNotificationRuleRequestBodyStatusEnum    `json:"Status,omitempty"`
	Tags               map[string]string                               `json:"Tags,omitempty"`
	Targets            []shared.Target                                 `json:"Targets"`
}

type CreateNotificationRuleRequest struct {
	Headers CreateNotificationRuleHeaders
	Request CreateNotificationRuleRequestBody `request:"mediaType=application/json"`
}

type CreateNotificationRuleResponse struct {
	AccessDeniedException           *interface{}
	ConcurrentModificationException *interface{}
	ConfigurationException          *interface{}
	ContentType                     string
	CreateNotificationRuleResult    *shared.CreateNotificationRuleResult
	LimitExceededException          *interface{}
	ResourceAlreadyExistsException  *interface{}
	StatusCode                      int64
	ValidationException             *interface{}
}
