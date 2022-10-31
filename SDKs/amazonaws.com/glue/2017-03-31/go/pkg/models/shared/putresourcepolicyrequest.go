package shared



type PutResourcePolicyRequest struct {
    EnableHybrid *EnableHybridValuesEnum `json:"EnableHybrid,omitempty"`
    PolicyExistsCondition *ExistConditionEnum `json:"PolicyExistsCondition,omitempty"`
    PolicyHashCondition *string `json:"PolicyHashCondition,omitempty"`
    PolicyInJSON string `json:"PolicyInJson"`
    ResourceArn *string `json:"ResourceArn,omitempty"`
    
}

