package shared

type OptionStateEnum string

const (
	OptionStateEnumRequiresIndexDocuments OptionStateEnum = "RequiresIndexDocuments"
	OptionStateEnumProcessing             OptionStateEnum = "Processing"
	OptionStateEnumActive                 OptionStateEnum = "Active"
	OptionStateEnumFailedToValidate       OptionStateEnum = "FailedToValidate"
)
