package shared

// TunnelOption
// The VPN tunnel options.
type TunnelOption struct {
	DpdTimeoutAction           *string
	DpdTimeoutSeconds          *int64
	IkeVersions                []IkeVersionsListValue
	OutsideIPAddress           *string
	Phase1DhGroupNumbers       []Phase1DhGroupNumbersListValue
	Phase1EncryptionAlgorithms []Phase1EncryptionAlgorithmsListValue
	Phase1IntegrityAlgorithms  []Phase1IntegrityAlgorithmsListValue
	Phase1LifetimeSeconds      *int64
	Phase2DhGroupNumbers       []Phase2DhGroupNumbersListValue
	Phase2EncryptionAlgorithms []Phase2EncryptionAlgorithmsListValue
	Phase2IntegrityAlgorithms  []Phase2IntegrityAlgorithmsListValue
	Phase2LifetimeSeconds      *int64
	PreSharedKey               *string
	RekeyFuzzPercentage        *int64
	RekeyMarginTimeSeconds     *int64
	ReplayWindowSize           *int64
	StartupAction              *string
	TunnelInsideCidr           *string
	TunnelInsideIpv6Cidr       *string
}
