package shared

type ApplicationInfo struct {
	CweMonitorEnabled  *bool   `json:"CWEMonitorEnabled"`
	LifeCycle          *string `json:"LifeCycle"`
	OpsCenterEnabled   *bool   `json:"OpsCenterEnabled"`
	OpsItemSnsTopicArn *string `json:"OpsItemSNSTopicArn"`
	Remarks            *string `json:"Remarks"`
	ResourceGroupName  *string `json:"ResourceGroupName"`
}
