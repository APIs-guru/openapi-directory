package shared

type BatchDisassociateApprovalRuleTemplateFromRepositoriesError struct {
	ErrorCode      *string `json:"errorCode"`
	ErrorMessage   *string `json:"errorMessage"`
	RepositoryName *string `json:"repositoryName"`
}
