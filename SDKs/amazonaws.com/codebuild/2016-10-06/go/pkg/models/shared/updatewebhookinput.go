package shared

type UpdateWebhookInput struct {
	BranchFilter *string               `json:"branchFilter,omitempty"`
	BuildType    *WebhookBuildTypeEnum `json:"buildType,omitempty"`
	FilterGroups [][]WebhookFilter     `json:"filterGroups,omitempty"`
	ProjectName  string                `json:"projectName"`
	RotateSecret *bool                 `json:"rotateSecret,omitempty"`
}
