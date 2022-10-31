package shared

type PiiEntityTypeEnum string

const (
	PiiEntityTypeEnumBankAccountNumber PiiEntityTypeEnum = "BANK_ACCOUNT_NUMBER"
	PiiEntityTypeEnumBankRouting       PiiEntityTypeEnum = "BANK_ROUTING"
	PiiEntityTypeEnumCreditDebitNumber PiiEntityTypeEnum = "CREDIT_DEBIT_NUMBER"
	PiiEntityTypeEnumCreditDebitCvv    PiiEntityTypeEnum = "CREDIT_DEBIT_CVV"
	PiiEntityTypeEnumCreditDebitExpiry PiiEntityTypeEnum = "CREDIT_DEBIT_EXPIRY"
	PiiEntityTypeEnumPin               PiiEntityTypeEnum = "PIN"
	PiiEntityTypeEnumEmail             PiiEntityTypeEnum = "EMAIL"
	PiiEntityTypeEnumAddress           PiiEntityTypeEnum = "ADDRESS"
	PiiEntityTypeEnumName              PiiEntityTypeEnum = "NAME"
	PiiEntityTypeEnumPhone             PiiEntityTypeEnum = "PHONE"
	PiiEntityTypeEnumSsn               PiiEntityTypeEnum = "SSN"
	PiiEntityTypeEnumDateTime          PiiEntityTypeEnum = "DATE_TIME"
	PiiEntityTypeEnumPassportNumber    PiiEntityTypeEnum = "PASSPORT_NUMBER"
	PiiEntityTypeEnumDriverID          PiiEntityTypeEnum = "DRIVER_ID"
	PiiEntityTypeEnumURL               PiiEntityTypeEnum = "URL"
	PiiEntityTypeEnumAge               PiiEntityTypeEnum = "AGE"
	PiiEntityTypeEnumUsername          PiiEntityTypeEnum = "USERNAME"
	PiiEntityTypeEnumPassword          PiiEntityTypeEnum = "PASSWORD"
	PiiEntityTypeEnumAwsAccessKey      PiiEntityTypeEnum = "AWS_ACCESS_KEY"
	PiiEntityTypeEnumAwsSecretKey      PiiEntityTypeEnum = "AWS_SECRET_KEY"
	PiiEntityTypeEnumIPAddress         PiiEntityTypeEnum = "IP_ADDRESS"
	PiiEntityTypeEnumMacAddress        PiiEntityTypeEnum = "MAC_ADDRESS"
	PiiEntityTypeEnumAll               PiiEntityTypeEnum = "ALL"
)
