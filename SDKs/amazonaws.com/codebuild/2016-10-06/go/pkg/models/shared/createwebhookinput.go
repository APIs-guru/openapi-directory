package shared

type CreateWebhookInput struct {
	BranchFilter *string               `json:"branchFilter"`
	BuildType    *WebhookBuildTypeEnum `json:"buildType"`
	FilterGroups [][]WebhookFilter     `json:"filterGroups"`
	ProjectName  string                `json:"projectName"`
}
