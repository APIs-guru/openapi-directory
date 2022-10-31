package shared



type Role struct {
    RoleArn *string `json:"roleArn,omitempty"`
    RoleType *RoleTypeEnum `json:"roleType,omitempty"`
    
}

