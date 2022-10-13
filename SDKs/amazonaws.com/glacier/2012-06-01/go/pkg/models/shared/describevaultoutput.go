package shared

type DescribeVaultOutput struct {
	CreationDate      *string `json:"CreationDate"`
	LastInventoryDate *string `json:"LastInventoryDate"`
	NumberOfArchives  *int64  `json:"NumberOfArchives"`
	SizeInBytes       *int64  `json:"SizeInBytes"`
	VaultArn          *string `json:"VaultARN"`
	VaultName         *string `json:"VaultName"`
}
