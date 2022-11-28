package shared

// TieringPolicy
// Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.
type TieringPolicy struct {
	CoolingPeriod *int64                 `json:"CoolingPeriod,omitempty"`
	Name          *TieringPolicyNameEnum `json:"Name,omitempty"`
}
