package operations

import (
	"openapi/pkg/models/shared"
)

type GetApprovalRuleTemplateXAmzTargetEnum string

const (
	GetApprovalRuleTemplateXAmzTargetEnumCodeCommit20150413GetApprovalRuleTemplate GetApprovalRuleTemplateXAmzTargetEnum = "CodeCommit_20150413.GetApprovalRuleTemplate"
)

type GetApprovalRuleTemplateHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetApprovalRuleTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetApprovalRuleTemplateRequest struct {
	Headers GetApprovalRuleTemplateHeaders
	Request shared.GetApprovalRuleTemplateInput `request:"mediaType=application/json"`
}

type GetApprovalRuleTemplateResponse struct {
	ApprovalRuleTemplateDoesNotExistException *interface{}
	ApprovalRuleTemplateNameRequiredException *interface{}
	ContentType                               string
	GetApprovalRuleTemplateOutput             *shared.GetApprovalRuleTemplateOutput
	InvalidApprovalRuleTemplateNameException  *interface{}
	StatusCode                                int64
}
