package shared

type BatchDisassociateApprovalRuleTemplateFromRepositoriesError struct {
	ErrorCode      *string `json:"errorCode,omitempty"`
	ErrorMessage   *string `json:"errorMessage,omitempty"`
	RepositoryName *string `json:"repositoryName,omitempty"`
}
