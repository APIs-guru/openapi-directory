package shared

type MessageActionEnum string

const (
	MessageActionEnumSuppress MessageActionEnum = "SUPPRESS"
	MessageActionEnumResend   MessageActionEnum = "RESEND"
)
