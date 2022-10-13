package shared

type ListVaultsOutput struct {
	Marker    *string               `json:"Marker"`
	VaultList []DescribeVaultOutput `json:"VaultList"`
}
