package shared

type UpdateWebhookInput struct {
	BranchFilter *string               `json:"branchFilter"`
	BuildType    *WebhookBuildTypeEnum `json:"buildType"`
	FilterGroups [][]WebhookFilter     `json:"filterGroups"`
	ProjectName  string                `json:"projectName"`
	RotateSecret *bool                 `json:"rotateSecret"`
}
