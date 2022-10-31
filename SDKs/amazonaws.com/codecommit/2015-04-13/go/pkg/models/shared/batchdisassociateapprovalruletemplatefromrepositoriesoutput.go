package shared



type BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput struct {
    DisassociatedRepositoryNames []string `json:"disassociatedRepositoryNames"`
    Errors []BatchDisassociateApprovalRuleTemplateFromRepositoriesError `json:"errors"`
    
}

