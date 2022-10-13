package shared

type WebhookFilterTypeEnum string

const (
	WebhookFilterTypeEnumEvent          WebhookFilterTypeEnum = "EVENT"
	WebhookFilterTypeEnumBaseRef        WebhookFilterTypeEnum = "BASE_REF"
	WebhookFilterTypeEnumHeadRef        WebhookFilterTypeEnum = "HEAD_REF"
	WebhookFilterTypeEnumActorAccountID WebhookFilterTypeEnum = "ACTOR_ACCOUNT_ID"
	WebhookFilterTypeEnumFilePath       WebhookFilterTypeEnum = "FILE_PATH"
	WebhookFilterTypeEnumCommitMessage  WebhookFilterTypeEnum = "COMMIT_MESSAGE"
)
