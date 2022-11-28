package shared

type SpotAllocationStrategyEnum string

const (
	SpotAllocationStrategyEnumLowestPrice                  SpotAllocationStrategyEnum = "lowest-price"
	SpotAllocationStrategyEnumDiversified                  SpotAllocationStrategyEnum = "diversified"
	SpotAllocationStrategyEnumCapacityOptimized            SpotAllocationStrategyEnum = "capacity-optimized"
	SpotAllocationStrategyEnumCapacityOptimizedPrioritized SpotAllocationStrategyEnum = "capacity-optimized-prioritized"
)
