package shared

// BatchAssociateApprovalRuleTemplateWithRepositoriesError
// Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation.
type BatchAssociateApprovalRuleTemplateWithRepositoriesError struct {
	ErrorCode      *string `json:"errorCode,omitempty"`
	ErrorMessage   *string `json:"errorMessage,omitempty"`
	RepositoryName *string `json:"repositoryName,omitempty"`
}
