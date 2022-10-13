package shared

type UpdateApplicationRequest struct {
	CweMonitorEnabled  *bool   `json:"CWEMonitorEnabled"`
	OpsCenterEnabled   *bool   `json:"OpsCenterEnabled"`
	OpsItemSnsTopicArn *string `json:"OpsItemSNSTopicArn"`
	RemoveSnsTopic     *bool   `json:"RemoveSNSTopic"`
	ResourceGroupName  string  `json:"ResourceGroupName"`
}
