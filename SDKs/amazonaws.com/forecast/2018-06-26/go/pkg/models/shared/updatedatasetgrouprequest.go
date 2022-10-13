package shared

type UpdateDatasetGroupRequest struct {
	DatasetArns     []string `json:"DatasetArns"`
	DatasetGroupArn string   `json:"DatasetGroupArn"`
}
