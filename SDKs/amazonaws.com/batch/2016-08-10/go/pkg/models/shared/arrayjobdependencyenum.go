package shared

type ArrayJobDependencyEnum string

const (
	ArrayJobDependencyEnumNToN       ArrayJobDependencyEnum = "N_TO_N"
	ArrayJobDependencyEnumSequential ArrayJobDependencyEnum = "SEQUENTIAL"
)
