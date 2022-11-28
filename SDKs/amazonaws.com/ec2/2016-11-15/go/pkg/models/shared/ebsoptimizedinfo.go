package shared

// EbsOptimizedInfo
// Describes the optimized EBS performance for supported instance types.
type EbsOptimizedInfo struct {
	BaselineBandwidthInMbps  *int64
	BaselineIops             *int64
	BaselineThroughputInMBps *float64
	MaximumBandwidthInMbps   *int64
	MaximumIops              *int64
	MaximumThroughputInMBps  *float64
}
