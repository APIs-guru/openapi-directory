package shared



type PutResourceAttributesRequest struct {
    DryRun *bool `json:"DryRun,omitempty"`
    MigrationTaskName string `json:"MigrationTaskName"`
    ProgressUpdateStream string `json:"ProgressUpdateStream"`
    ResourceAttributeList []ResourceAttribute `json:"ResourceAttributeList"`
    
}

