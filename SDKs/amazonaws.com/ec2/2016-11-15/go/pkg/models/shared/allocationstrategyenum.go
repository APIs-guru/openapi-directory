package shared

type AllocationStrategyEnum string

const (
	AllocationStrategyEnumLowestPrice                  AllocationStrategyEnum = "lowestPrice"
	AllocationStrategyEnumDiversified                  AllocationStrategyEnum = "diversified"
	AllocationStrategyEnumCapacityOptimized            AllocationStrategyEnum = "capacityOptimized"
	AllocationStrategyEnumCapacityOptimizedPrioritized AllocationStrategyEnum = "capacityOptimizedPrioritized"
)
