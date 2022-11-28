package shared

type PlacementStrategyEnum string

const (
	PlacementStrategyEnumCluster   PlacementStrategyEnum = "cluster"
	PlacementStrategyEnumSpread    PlacementStrategyEnum = "spread"
	PlacementStrategyEnumPartition PlacementStrategyEnum = "partition"
)
