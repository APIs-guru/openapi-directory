package shared

type BatchAssociateApprovalRuleTemplateWithRepositoriesError struct {
	ErrorCode      *string `json:"errorCode"`
	ErrorMessage   *string `json:"errorMessage"`
	RepositoryName *string `json:"repositoryName"`
}
