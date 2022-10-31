package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApprovalRuleTemplateXAmzTargetEnum string

const (
	DeleteApprovalRuleTemplateXAmzTargetEnumCodeCommit20150413DeleteApprovalRuleTemplate DeleteApprovalRuleTemplateXAmzTargetEnum = "CodeCommit_20150413.DeleteApprovalRuleTemplate"
)

type DeleteApprovalRuleTemplateHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteApprovalRuleTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteApprovalRuleTemplateRequest struct {
	Headers DeleteApprovalRuleTemplateHeaders
	Request shared.DeleteApprovalRuleTemplateInput `request:"mediaType=application/json"`
}

type DeleteApprovalRuleTemplateResponse struct {
	ApprovalRuleTemplateInUseException        *interface{}
	ApprovalRuleTemplateNameRequiredException *interface{}
	ContentType                               string
	DeleteApprovalRuleTemplateOutput          *shared.DeleteApprovalRuleTemplateOutput
	InvalidApprovalRuleTemplateNameException  *interface{}
	StatusCode                                int64
}
