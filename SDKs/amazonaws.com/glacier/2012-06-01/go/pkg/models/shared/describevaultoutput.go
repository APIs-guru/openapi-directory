package shared

// DescribeVaultOutput
// Contains the Amazon S3 Glacier response to your request.
type DescribeVaultOutput struct {
	CreationDate      *string `json:"CreationDate,omitempty"`
	LastInventoryDate *string `json:"LastInventoryDate,omitempty"`
	NumberOfArchives  *int64  `json:"NumberOfArchives,omitempty"`
	SizeInBytes       *int64  `json:"SizeInBytes,omitempty"`
	VaultArn          *string `json:"VaultARN,omitempty"`
	VaultName         *string `json:"VaultName,omitempty"`
}
