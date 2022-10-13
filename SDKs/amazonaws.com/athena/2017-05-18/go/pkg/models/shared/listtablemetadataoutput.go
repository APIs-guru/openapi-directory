package shared

type ListTableMetadataOutput struct {
	NextToken         *string         `json:"NextToken"`
	TableMetadataList []TableMetadata `json:"TableMetadataList"`
}
