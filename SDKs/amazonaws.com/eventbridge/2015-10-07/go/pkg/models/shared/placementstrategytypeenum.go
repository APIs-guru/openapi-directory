package shared

type PlacementStrategyTypeEnum string

const (
	PlacementStrategyTypeEnumRandom  PlacementStrategyTypeEnum = "random"
	PlacementStrategyTypeEnumSpread  PlacementStrategyTypeEnum = "spread"
	PlacementStrategyTypeEnumBinpack PlacementStrategyTypeEnum = "binpack"
)
