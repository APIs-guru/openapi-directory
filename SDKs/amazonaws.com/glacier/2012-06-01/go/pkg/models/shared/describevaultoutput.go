package shared



type DescribeVaultOutput struct {
    CreationDate *string `json:"CreationDate,omitempty"`
    LastInventoryDate *string `json:"LastInventoryDate,omitempty"`
    NumberOfArchives *int64 `json:"NumberOfArchives,omitempty"`
    SizeInBytes *int64 `json:"SizeInBytes,omitempty"`
    VaultArn *string `json:"VaultARN,omitempty"`
    VaultName *string `json:"VaultName,omitempty"`
    
}

