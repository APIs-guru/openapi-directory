package shared

type ResolutionStrategyEnum string

const (
	ResolutionStrategyEnumOptimisticConcurrency ResolutionStrategyEnum = "OPTIMISTIC_CONCURRENCY"
	ResolutionStrategyEnumLambda                ResolutionStrategyEnum = "LAMBDA"
	ResolutionStrategyEnumAutomerge             ResolutionStrategyEnum = "AUTOMERGE"
	ResolutionStrategyEnumNone                  ResolutionStrategyEnum = "NONE"
)
