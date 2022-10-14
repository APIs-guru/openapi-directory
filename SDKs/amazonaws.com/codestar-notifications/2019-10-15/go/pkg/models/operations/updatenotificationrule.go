package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNotificationRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateNotificationRuleRequestBodyDetailTypeEnum string

const (
	UpdateNotificationRuleRequestBodyDetailTypeEnumBasic UpdateNotificationRuleRequestBodyDetailTypeEnum = "BASIC"
	UpdateNotificationRuleRequestBodyDetailTypeEnumFull  UpdateNotificationRuleRequestBodyDetailTypeEnum = "FULL"
)

type UpdateNotificationRuleRequestBodyStatusEnum string

const (
	UpdateNotificationRuleRequestBodyStatusEnumEnabled  UpdateNotificationRuleRequestBodyStatusEnum = "ENABLED"
	UpdateNotificationRuleRequestBodyStatusEnumDisabled UpdateNotificationRuleRequestBodyStatusEnum = "DISABLED"
)

type UpdateNotificationRuleRequestBody struct {
	Arn          string                                           `json:"Arn"`
	DetailType   *UpdateNotificationRuleRequestBodyDetailTypeEnum `json:"DetailType,omitempty"`
	EventTypeIds []string                                         `json:"EventTypeIds,omitempty"`
	Name         *string                                          `json:"Name,omitempty"`
	Status       *UpdateNotificationRuleRequestBodyStatusEnum     `json:"Status,omitempty"`
	Targets      []shared.Target                                  `json:"Targets,omitempty"`
}

type UpdateNotificationRuleRequest struct {
	Headers UpdateNotificationRuleHeaders
	Request UpdateNotificationRuleRequestBody `request:"mediaType=application/json"`
}

type UpdateNotificationRuleResponse struct {
	ContentType                  string
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	UpdateNotificationRuleResult map[string]interface{}
	ValidationException          *interface{}
}
