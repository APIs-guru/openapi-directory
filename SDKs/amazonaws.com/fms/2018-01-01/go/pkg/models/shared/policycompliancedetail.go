package shared

import (
"time")

type PolicyComplianceDetail struct {
    EvaluationLimitExceeded *bool `json:"EvaluationLimitExceeded,omitempty"`
    ExpiredAt *time.Time `json:"ExpiredAt,omitempty"`
    IssueInfoMap map[string]string `json:"IssueInfoMap,omitempty"`
    MemberAccount *string `json:"MemberAccount,omitempty"`
    PolicyID *string `json:"PolicyId,omitempty"`
    PolicyOwner *string `json:"PolicyOwner,omitempty"`
    Violators []ComplianceViolator `json:"Violators,omitempty"`
    
}

