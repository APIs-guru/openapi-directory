package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateApprovalRuleTemplateNameXAmzTargetEnum string

const (
	UpdateApprovalRuleTemplateNameXAmzTargetEnumCodeCommit20150413UpdateApprovalRuleTemplateName UpdateApprovalRuleTemplateNameXAmzTargetEnum = "CodeCommit_20150413.UpdateApprovalRuleTemplateName"
)

type UpdateApprovalRuleTemplateNameHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateApprovalRuleTemplateNameXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateApprovalRuleTemplateNameRequest struct {
	Headers UpdateApprovalRuleTemplateNameHeaders
	Request shared.UpdateApprovalRuleTemplateNameInput `request:"mediaType=application/json"`
}

type UpdateApprovalRuleTemplateNameResponse struct {
	ApprovalRuleTemplateDoesNotExistException      *interface{}
	ApprovalRuleTemplateNameAlreadyExistsException *interface{}
	ApprovalRuleTemplateNameRequiredException      *interface{}
	ContentType                                    string
	InvalidApprovalRuleTemplateNameException       *interface{}
	StatusCode                                     int64
	UpdateApprovalRuleTemplateNameOutput           *shared.UpdateApprovalRuleTemplateNameOutput
}
