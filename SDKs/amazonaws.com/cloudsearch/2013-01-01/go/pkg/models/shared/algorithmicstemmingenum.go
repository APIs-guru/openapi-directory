package shared

type AlgorithmicStemmingEnum string

const (
	AlgorithmicStemmingEnumNone    AlgorithmicStemmingEnum = "none"
	AlgorithmicStemmingEnumMinimal AlgorithmicStemmingEnum = "minimal"
	AlgorithmicStemmingEnumLight   AlgorithmicStemmingEnum = "light"
	AlgorithmicStemmingEnumFull    AlgorithmicStemmingEnum = "full"
)
