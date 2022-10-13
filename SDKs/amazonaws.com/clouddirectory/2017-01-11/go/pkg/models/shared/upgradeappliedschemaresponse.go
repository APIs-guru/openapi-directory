package shared

type UpgradeAppliedSchemaResponse struct {
	DirectoryArn      *string `json:"DirectoryArn"`
	UpgradedSchemaArn *string `json:"UpgradedSchemaArn"`
}
