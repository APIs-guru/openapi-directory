package shared

type SelectEnum string

const (
	SelectEnumAllAttributes          SelectEnum = "ALL_ATTRIBUTES"
	SelectEnumAllProjectedAttributes SelectEnum = "ALL_PROJECTED_ATTRIBUTES"
	SelectEnumSpecificAttributes     SelectEnum = "SPECIFIC_ATTRIBUTES"
	SelectEnumCount                  SelectEnum = "COUNT"
)
