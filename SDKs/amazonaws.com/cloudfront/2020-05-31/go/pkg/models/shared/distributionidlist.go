package shared

// DistributionIDList
// A list of distribution IDs.
type DistributionIDList struct {
	IsTruncated bool
	Items       []string
	Marker      string
	MaxItems    int64
	NextMarker  *string
	Quantity    int64
}
