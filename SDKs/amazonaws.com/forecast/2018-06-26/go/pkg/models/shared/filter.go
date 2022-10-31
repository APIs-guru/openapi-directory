package shared



type Filter struct {
    Condition FilterConditionStringEnum `json:"Condition"`
    Key string `json:"Key"`
    Value string `json:"Value"`
    
}

