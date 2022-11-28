package shared

type PaymentOptionEnum string

const (
	PaymentOptionEnumAllUpfront     PaymentOptionEnum = "AllUpfront"
	PaymentOptionEnumPartialUpfront PaymentOptionEnum = "PartialUpfront"
	PaymentOptionEnumNoUpfront      PaymentOptionEnum = "NoUpfront"
)
