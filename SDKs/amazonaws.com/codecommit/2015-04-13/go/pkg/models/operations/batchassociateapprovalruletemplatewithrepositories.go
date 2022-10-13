package operations

import (
	"openapi/pkg/models/shared"
)

type BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum string

const (
	BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnumCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositories BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum = "CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories"
)

type BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders struct {
	XAmzAlgorithm     *string                                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchAssociateApprovalRuleTemplateWithRepositoriesRequest struct {
	Headers BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders
	Request shared.BatchAssociateApprovalRuleTemplateWithRepositoriesInput `request:"mediaType=application/json"`
}

type BatchAssociateApprovalRuleTemplateWithRepositoriesResponse struct {
	ApprovalRuleTemplateDoesNotExistException                *interface{}
	ApprovalRuleTemplateNameRequiredException                *interface{}
	BatchAssociateApprovalRuleTemplateWithRepositoriesOutput *shared.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput
	ContentType                                              string
	EncryptionIntegrityChecksFailedException                 *interface{}
	EncryptionKeyAccessDeniedException                       *interface{}
	EncryptionKeyDisabledException                           *interface{}
	EncryptionKeyNotFoundException                           *interface{}
	EncryptionKeyUnavailableException                        *interface{}
	InvalidApprovalRuleTemplateNameException                 *interface{}
	MaximumRepositoryNamesExceededException                  *interface{}
	RepositoryNamesRequiredException                         *interface{}
	StatusCode                                               int64
}
