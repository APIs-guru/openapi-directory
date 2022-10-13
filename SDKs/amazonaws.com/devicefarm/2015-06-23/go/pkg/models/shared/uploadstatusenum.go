package shared

type UploadStatusEnum string

const (
	UploadStatusEnumInitialized UploadStatusEnum = "INITIALIZED"
	UploadStatusEnumProcessing  UploadStatusEnum = "PROCESSING"
	UploadStatusEnumSucceeded   UploadStatusEnum = "SUCCEEDED"
	UploadStatusEnumFailed      UploadStatusEnum = "FAILED"
)
