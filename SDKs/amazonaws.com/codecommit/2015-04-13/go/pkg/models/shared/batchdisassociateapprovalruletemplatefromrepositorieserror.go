package shared

// BatchDisassociateApprovalRuleTemplateFromRepositoriesError
// Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation.
type BatchDisassociateApprovalRuleTemplateFromRepositoriesError struct {
	ErrorCode      *string `json:"errorCode,omitempty"`
	ErrorMessage   *string `json:"errorMessage,omitempty"`
	RepositoryName *string `json:"repositoryName,omitempty"`
}
