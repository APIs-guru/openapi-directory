package shared

// WarmPoolConfiguration
// Describes a warm pool configuration.
type WarmPoolConfiguration struct {
	MaxGroupPreparedCapacity *int64
	MinSize                  *int64
	PoolState                *WarmPoolStateEnum
	Status                   *WarmPoolStatusEnum
}
