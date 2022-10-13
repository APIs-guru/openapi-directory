package shared

type ConflictResolutionStrategyTypeEnumEnum string

const (
	ConflictResolutionStrategyTypeEnumEnumNone              ConflictResolutionStrategyTypeEnumEnum = "NONE"
	ConflictResolutionStrategyTypeEnumEnumAcceptSource      ConflictResolutionStrategyTypeEnumEnum = "ACCEPT_SOURCE"
	ConflictResolutionStrategyTypeEnumEnumAcceptDestination ConflictResolutionStrategyTypeEnumEnum = "ACCEPT_DESTINATION"
	ConflictResolutionStrategyTypeEnumEnumAutomerge         ConflictResolutionStrategyTypeEnumEnum = "AUTOMERGE"
)
