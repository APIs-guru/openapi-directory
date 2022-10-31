package shared

type CreateWebhookInput struct {
	BranchFilter *string               `json:"branchFilter,omitempty"`
	BuildType    *WebhookBuildTypeEnum `json:"buildType,omitempty"`
	FilterGroups [][]WebhookFilter     `json:"filterGroups,omitempty"`
	ProjectName  string                `json:"projectName"`
}
