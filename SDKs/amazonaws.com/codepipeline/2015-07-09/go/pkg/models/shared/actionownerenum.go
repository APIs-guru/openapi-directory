package shared

type ActionOwnerEnum string

const (
	ActionOwnerEnumAws        ActionOwnerEnum = "AWS"
	ActionOwnerEnumThirdParty ActionOwnerEnum = "ThirdParty"
	ActionOwnerEnumCustom     ActionOwnerEnum = "Custom"
)
