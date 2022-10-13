package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum string

const (
	UpdateApprovalRuleTemplateDescriptionXAmzTargetEnumCodeCommit20150413UpdateApprovalRuleTemplateDescription UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum = "CodeCommit_20150413.UpdateApprovalRuleTemplateDescription"
)

type UpdateApprovalRuleTemplateDescriptionHeaders struct {
	XAmzAlgorithm     *string                                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateApprovalRuleTemplateDescriptionRequest struct {
	Headers UpdateApprovalRuleTemplateDescriptionHeaders
	Request shared.UpdateApprovalRuleTemplateDescriptionInput `request:"mediaType=application/json"`
}

type UpdateApprovalRuleTemplateDescriptionResponse struct {
	ApprovalRuleTemplateDoesNotExistException       *interface{}
	ApprovalRuleTemplateNameRequiredException       *interface{}
	ContentType                                     string
	InvalidApprovalRuleTemplateDescriptionException *interface{}
	InvalidApprovalRuleTemplateNameException        *interface{}
	StatusCode                                      int64
	UpdateApprovalRuleTemplateDescriptionOutput     *shared.UpdateApprovalRuleTemplateDescriptionOutput
}
