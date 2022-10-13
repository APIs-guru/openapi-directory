package shared

type SignInMethodEnum string

const (
	SignInMethodEnumEmail               SignInMethodEnum = "EMAIL"
	SignInMethodEnumEmailAndPhoneNumber SignInMethodEnum = "EMAIL_AND_PHONE_NUMBER"
	SignInMethodEnumPhoneNumber         SignInMethodEnum = "PHONE_NUMBER"
	SignInMethodEnumUsername            SignInMethodEnum = "USERNAME"
)
