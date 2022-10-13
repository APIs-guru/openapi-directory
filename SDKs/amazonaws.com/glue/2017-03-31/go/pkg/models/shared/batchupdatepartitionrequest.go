package shared

type BatchUpdatePartitionRequest struct {
	CatalogID    *string                            `json:"CatalogId"`
	DatabaseName string                             `json:"DatabaseName"`
	Entries      []BatchUpdatePartitionRequestEntry `json:"Entries"`
	TableName    string                             `json:"TableName"`
}
