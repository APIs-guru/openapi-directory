package shared



type UpdateApplicationRequest struct {
    CweMonitorEnabled *bool `json:"CWEMonitorEnabled,omitempty"`
    OpsCenterEnabled *bool `json:"OpsCenterEnabled,omitempty"`
    OpsItemSnsTopicArn *string `json:"OpsItemSNSTopicArn,omitempty"`
    RemoveSnsTopic *bool `json:"RemoveSNSTopic,omitempty"`
    ResourceGroupName string `json:"ResourceGroupName"`
    
}

