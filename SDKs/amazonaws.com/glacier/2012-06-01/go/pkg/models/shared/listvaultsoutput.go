package shared

// ListVaultsOutput
// Contains the Amazon S3 Glacier response to your request.
type ListVaultsOutput struct {
	Marker    *string               `json:"Marker,omitempty"`
	VaultList []DescribeVaultOutput `json:"VaultList,omitempty"`
}
