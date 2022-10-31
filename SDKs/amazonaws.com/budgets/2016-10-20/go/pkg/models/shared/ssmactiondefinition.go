package shared



type SsmActionDefinition struct {
    ActionSubType ActionSubTypeEnum `json:"ActionSubType"`
    InstanceIds []string `json:"InstanceIds"`
    Region string `json:"Region"`
    
}

