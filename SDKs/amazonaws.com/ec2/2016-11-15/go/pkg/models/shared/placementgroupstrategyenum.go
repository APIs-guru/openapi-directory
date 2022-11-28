package shared

type PlacementGroupStrategyEnum string

const (
	PlacementGroupStrategyEnumCluster   PlacementGroupStrategyEnum = "cluster"
	PlacementGroupStrategyEnumPartition PlacementGroupStrategyEnum = "partition"
	PlacementGroupStrategyEnumSpread    PlacementGroupStrategyEnum = "spread"
)
