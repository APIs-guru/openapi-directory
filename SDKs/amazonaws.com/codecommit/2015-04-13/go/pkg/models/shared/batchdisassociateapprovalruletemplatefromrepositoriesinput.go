package shared



type BatchDisassociateApprovalRuleTemplateFromRepositoriesInput struct {
    ApprovalRuleTemplateName string `json:"approvalRuleTemplateName"`
    RepositoryNames []string `json:"repositoryNames"`
    
}

