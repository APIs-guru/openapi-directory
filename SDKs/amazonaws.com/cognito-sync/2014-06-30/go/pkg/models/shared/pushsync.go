package shared



type PushSync struct {
    ApplicationArns []string `json:"ApplicationArns,omitempty"`
    RoleArn *string `json:"RoleArn,omitempty"`
    
}

