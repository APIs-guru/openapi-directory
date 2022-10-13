package shared

type ImportStatusEnum string

const (
	ImportStatusEnumImportInProgress                ImportStatusEnum = "IMPORT_IN_PROGRESS"
	ImportStatusEnumImportComplete                  ImportStatusEnum = "IMPORT_COMPLETE"
	ImportStatusEnumImportCompleteWithErrors        ImportStatusEnum = "IMPORT_COMPLETE_WITH_ERRORS"
	ImportStatusEnumImportFailed                    ImportStatusEnum = "IMPORT_FAILED"
	ImportStatusEnumImportFailedServerLimitExceeded ImportStatusEnum = "IMPORT_FAILED_SERVER_LIMIT_EXCEEDED"
	ImportStatusEnumImportFailedRecordLimitExceeded ImportStatusEnum = "IMPORT_FAILED_RECORD_LIMIT_EXCEEDED"
	ImportStatusEnumDeleteInProgress                ImportStatusEnum = "DELETE_IN_PROGRESS"
	ImportStatusEnumDeleteComplete                  ImportStatusEnum = "DELETE_COMPLETE"
	ImportStatusEnumDeleteFailed                    ImportStatusEnum = "DELETE_FAILED"
	ImportStatusEnumDeleteFailedLimitExceeded       ImportStatusEnum = "DELETE_FAILED_LIMIT_EXCEEDED"
	ImportStatusEnumInternalError                   ImportStatusEnum = "INTERNAL_ERROR"
)
