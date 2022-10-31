package shared

type FindingEnum string

const (
	FindingEnumUnderprovisioned FindingEnum = "Underprovisioned"
	FindingEnumOverprovisioned  FindingEnum = "Overprovisioned"
	FindingEnumOptimized        FindingEnum = "Optimized"
	FindingEnumNotOptimized     FindingEnum = "NotOptimized"
)
