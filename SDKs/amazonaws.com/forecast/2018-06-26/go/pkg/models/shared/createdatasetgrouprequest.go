package shared

type CreateDatasetGroupRequest struct {
	DatasetArns      []string   `json:"DatasetArns"`
	DatasetGroupName string     `json:"DatasetGroupName"`
	Domain           DomainEnum `json:"Domain"`
	Tags             []Tag      `json:"Tags"`
}
