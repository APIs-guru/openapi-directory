package shared

type PlacementGroupStrategyEnum string

const (
	PlacementGroupStrategyEnumSpread    PlacementGroupStrategyEnum = "SPREAD"
	PlacementGroupStrategyEnumPartition PlacementGroupStrategyEnum = "PARTITION"
	PlacementGroupStrategyEnumCluster   PlacementGroupStrategyEnum = "CLUSTER"
	PlacementGroupStrategyEnumNone      PlacementGroupStrategyEnum = "NONE"
)
