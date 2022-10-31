package shared

type EmailSendingAccountTypeEnum string

const (
	EmailSendingAccountTypeEnumCognitoDefault EmailSendingAccountTypeEnum = "COGNITO_DEFAULT"
	EmailSendingAccountTypeEnumDeveloper      EmailSendingAccountTypeEnum = "DEVELOPER"
)
