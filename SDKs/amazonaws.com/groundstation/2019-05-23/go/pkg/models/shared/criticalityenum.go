package shared

type CriticalityEnum string

const (
	CriticalityEnumPreferred CriticalityEnum = "PREFERRED"
	CriticalityEnumRemoved   CriticalityEnum = "REMOVED"
	CriticalityEnumRequired  CriticalityEnum = "REQUIRED"
)
