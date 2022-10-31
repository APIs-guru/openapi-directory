package shared

type ListVaultsOutput struct {
	Marker    *string               `json:"Marker,omitempty"`
	VaultList []DescribeVaultOutput `json:"VaultList,omitempty"`
}
