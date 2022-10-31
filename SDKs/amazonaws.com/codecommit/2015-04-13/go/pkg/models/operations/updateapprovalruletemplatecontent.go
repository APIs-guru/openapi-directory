package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateApprovalRuleTemplateContentXAmzTargetEnum string

const (
	UpdateApprovalRuleTemplateContentXAmzTargetEnumCodeCommit20150413UpdateApprovalRuleTemplateContent UpdateApprovalRuleTemplateContentXAmzTargetEnum = "CodeCommit_20150413.UpdateApprovalRuleTemplateContent"
)

type UpdateApprovalRuleTemplateContentHeaders struct {
	XAmzAlgorithm     *string                                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateApprovalRuleTemplateContentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateApprovalRuleTemplateContentRequest struct {
	Headers UpdateApprovalRuleTemplateContentHeaders
	Request shared.UpdateApprovalRuleTemplateContentInput `request:"mediaType=application/json"`
}

type UpdateApprovalRuleTemplateContentResponse struct {
	ApprovalRuleTemplateContentRequiredException *interface{}
	ApprovalRuleTemplateDoesNotExistException    *interface{}
	ApprovalRuleTemplateNameRequiredException    *interface{}
	ContentType                                  string
	InvalidApprovalRuleTemplateContentException  *interface{}
	InvalidApprovalRuleTemplateNameException     *interface{}
	InvalidRuleContentSha256Exception            *interface{}
	StatusCode                                   int64
	UpdateApprovalRuleTemplateContentOutput      *shared.UpdateApprovalRuleTemplateContentOutput
}
