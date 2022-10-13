package operations

import (
	"openapi/pkg/models/shared"
)

type CreateApprovalRuleTemplateXAmzTargetEnum string

const (
	CreateApprovalRuleTemplateXAmzTargetEnumCodeCommit20150413CreateApprovalRuleTemplate CreateApprovalRuleTemplateXAmzTargetEnum = "CodeCommit_20150413.CreateApprovalRuleTemplate"
)

type CreateApprovalRuleTemplateHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateApprovalRuleTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateApprovalRuleTemplateRequest struct {
	Headers CreateApprovalRuleTemplateHeaders
	Request shared.CreateApprovalRuleTemplateInput `request:"mediaType=application/json"`
}

type CreateApprovalRuleTemplateResponse struct {
	ApprovalRuleTemplateContentRequiredException    *interface{}
	ApprovalRuleTemplateNameAlreadyExistsException  *interface{}
	ApprovalRuleTemplateNameRequiredException       *interface{}
	ContentType                                     string
	CreateApprovalRuleTemplateOutput                *shared.CreateApprovalRuleTemplateOutput
	InvalidApprovalRuleTemplateContentException     *interface{}
	InvalidApprovalRuleTemplateDescriptionException *interface{}
	InvalidApprovalRuleTemplateNameException        *interface{}
	NumberOfRuleTemplatesExceededException          *interface{}
	StatusCode                                      int64
}
