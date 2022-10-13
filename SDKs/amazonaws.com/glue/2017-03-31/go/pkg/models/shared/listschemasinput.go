package shared

type ListSchemasInput struct {
	MaxResults *int64      `json:"MaxResults"`
	NextToken  *string     `json:"NextToken"`
	RegistryID *RegistryID `json:"RegistryId"`
}
