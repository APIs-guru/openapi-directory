package shared

type JobListRequestBody struct {
	ConfigID    string              `json:"configId"`
	ConfigTypes []JobConfigTypeEnum `json:"configTypes"`
	Pagination  *Pagination         `json:"pagination,omitempty"`
}
