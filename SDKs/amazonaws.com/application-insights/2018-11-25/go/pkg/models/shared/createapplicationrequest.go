package shared

type CreateApplicationRequest struct {
	CweMonitorEnabled  *bool   `json:"CWEMonitorEnabled"`
	OpsCenterEnabled   *bool   `json:"OpsCenterEnabled"`
	OpsItemSnsTopicArn *string `json:"OpsItemSNSTopicArn"`
	ResourceGroupName  string  `json:"ResourceGroupName"`
	Tags               []Tag   `json:"Tags"`
}
