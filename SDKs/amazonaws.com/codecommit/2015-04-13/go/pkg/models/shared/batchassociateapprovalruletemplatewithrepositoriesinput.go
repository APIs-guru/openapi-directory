package shared



type BatchAssociateApprovalRuleTemplateWithRepositoriesInput struct {
    ApprovalRuleTemplateName string `json:"approvalRuleTemplateName"`
    RepositoryNames []string `json:"repositoryNames"`
    
}

