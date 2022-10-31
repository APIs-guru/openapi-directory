package shared

type BatchAssociateApprovalRuleTemplateWithRepositoriesOutput struct {
	AssociatedRepositoryNames []string                                                  `json:"associatedRepositoryNames"`
	Errors                    []BatchAssociateApprovalRuleTemplateWithRepositoriesError `json:"errors"`
}
