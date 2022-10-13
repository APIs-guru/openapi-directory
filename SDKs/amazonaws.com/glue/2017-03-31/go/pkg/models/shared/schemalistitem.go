package shared

type SchemaListItem struct {
	CreatedTime  *string           `json:"CreatedTime"`
	Description  *string           `json:"Description"`
	RegistryName *string           `json:"RegistryName"`
	SchemaArn    *string           `json:"SchemaArn"`
	SchemaName   *string           `json:"SchemaName"`
	SchemaStatus *SchemaStatusEnum `json:"SchemaStatus"`
	UpdatedTime  *string           `json:"UpdatedTime"`
}
