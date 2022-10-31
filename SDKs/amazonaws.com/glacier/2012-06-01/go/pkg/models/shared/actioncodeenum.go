package shared

type ActionCodeEnum string

const (
	ActionCodeEnumArchiveRetrieval   ActionCodeEnum = "ArchiveRetrieval"
	ActionCodeEnumInventoryRetrieval ActionCodeEnum = "InventoryRetrieval"
	ActionCodeEnumSelect             ActionCodeEnum = "Select"
)
