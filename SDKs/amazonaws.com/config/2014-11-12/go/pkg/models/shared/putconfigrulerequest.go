package shared



type PutConfigRuleRequest struct {
    ConfigRule ConfigRule `json:"ConfigRule"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

