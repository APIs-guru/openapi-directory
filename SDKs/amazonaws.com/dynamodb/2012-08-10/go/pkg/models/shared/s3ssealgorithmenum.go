package shared

type S3SseAlgorithmEnum string

const (
	S3SseAlgorithmEnumAes256 S3SseAlgorithmEnum = "AES256"
	S3SseAlgorithmEnumKms    S3SseAlgorithmEnum = "KMS"
)
