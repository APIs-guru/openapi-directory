package shared



type CreateApplicationRequest struct {
    CweMonitorEnabled *bool `json:"CWEMonitorEnabled,omitempty"`
    OpsCenterEnabled *bool `json:"OpsCenterEnabled,omitempty"`
    OpsItemSnsTopicArn *string `json:"OpsItemSNSTopicArn,omitempty"`
    ResourceGroupName string `json:"ResourceGroupName"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

