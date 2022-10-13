package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateApprovalRuleTemplateFromRepositoryXAmzTargetEnum string

const (
	DisassociateApprovalRuleTemplateFromRepositoryXAmzTargetEnumCodeCommit20150413DisassociateApprovalRuleTemplateFromRepository DisassociateApprovalRuleTemplateFromRepositoryXAmzTargetEnum = "CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository"
)

type DisassociateApprovalRuleTemplateFromRepositoryHeaders struct {
	XAmzAlgorithm     *string                                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateApprovalRuleTemplateFromRepositoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateApprovalRuleTemplateFromRepositoryRequest struct {
	Headers DisassociateApprovalRuleTemplateFromRepositoryHeaders
	Request shared.DisassociateApprovalRuleTemplateFromRepositoryInput `request:"mediaType=application/json"`
}

type DisassociateApprovalRuleTemplateFromRepositoryResponse struct {
	ApprovalRuleTemplateDoesNotExistException *interface{}
	ApprovalRuleTemplateNameRequiredException *interface{}
	ContentType                               string
	EncryptionIntegrityChecksFailedException  *interface{}
	EncryptionKeyAccessDeniedException        *interface{}
	EncryptionKeyDisabledException            *interface{}
	EncryptionKeyNotFoundException            *interface{}
	EncryptionKeyUnavailableException         *interface{}
	InvalidApprovalRuleTemplateNameException  *interface{}
	InvalidRepositoryNameException            *interface{}
	RepositoryDoesNotExistException           *interface{}
	RepositoryNameRequiredException           *interface{}
	StatusCode                                int64
}
