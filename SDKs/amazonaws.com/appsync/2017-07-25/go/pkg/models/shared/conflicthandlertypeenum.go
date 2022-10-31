package shared

type ConflictHandlerTypeEnum string

const (
	ConflictHandlerTypeEnumOptimisticConcurrency ConflictHandlerTypeEnum = "OPTIMISTIC_CONCURRENCY"
	ConflictHandlerTypeEnumLambda                ConflictHandlerTypeEnum = "LAMBDA"
	ConflictHandlerTypeEnumAutomerge             ConflictHandlerTypeEnum = "AUTOMERGE"
	ConflictHandlerTypeEnumNone                  ConflictHandlerTypeEnum = "NONE"
)
