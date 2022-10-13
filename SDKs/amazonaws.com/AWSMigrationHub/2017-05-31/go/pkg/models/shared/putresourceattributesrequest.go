package shared

type PutResourceAttributesRequest struct {
	DryRun                *bool               `json:"DryRun"`
	MigrationTaskName     string              `json:"MigrationTaskName"`
	ProgressUpdateStream  string              `json:"ProgressUpdateStream"`
	ResourceAttributeList []ResourceAttribute `json:"ResourceAttributeList"`
}
