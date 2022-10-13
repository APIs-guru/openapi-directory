package shared

type BillingModeEnum string

const (
	BillingModeEnumProvisioned   BillingModeEnum = "PROVISIONED"
	BillingModeEnumPayPerRequest BillingModeEnum = "PAY_PER_REQUEST"
)
