package shared

type JobBookmarksEncryptionModeEnum string

const (
	JobBookmarksEncryptionModeEnumDisabled JobBookmarksEncryptionModeEnum = "DISABLED"
	JobBookmarksEncryptionModeEnumCseKms   JobBookmarksEncryptionModeEnum = "CSE-KMS"
)
