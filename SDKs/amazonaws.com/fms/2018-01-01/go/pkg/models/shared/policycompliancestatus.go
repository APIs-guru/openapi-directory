package shared

import (
"time")

type PolicyComplianceStatus struct {
    EvaluationResults []EvaluationResult `json:"EvaluationResults,omitempty"`
    IssueInfoMap map[string]string `json:"IssueInfoMap,omitempty"`
    LastUpdated *time.Time `json:"LastUpdated,omitempty"`
    MemberAccount *string `json:"MemberAccount,omitempty"`
    PolicyID *string `json:"PolicyId,omitempty"`
    PolicyName *string `json:"PolicyName,omitempty"`
    PolicyOwner *string `json:"PolicyOwner,omitempty"`
    
}

