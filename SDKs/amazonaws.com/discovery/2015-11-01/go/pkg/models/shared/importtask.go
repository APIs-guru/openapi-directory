package shared

import (
	"time"
)

type ImportTask struct {
	ApplicationImportFailure  *int64            `json:"applicationImportFailure"`
	ApplicationImportSuccess  *int64            `json:"applicationImportSuccess"`
	ClientRequestToken        *string           `json:"clientRequestToken"`
	ErrorsAndFailedEntriesZip *string           `json:"errorsAndFailedEntriesZip"`
	ImportCompletionTime      *time.Time        `json:"importCompletionTime"`
	ImportDeletedTime         *time.Time        `json:"importDeletedTime"`
	ImportRequestTime         *time.Time        `json:"importRequestTime"`
	ImportTaskID              *string           `json:"importTaskId"`
	ImportURL                 *string           `json:"importUrl"`
	Name                      *string           `json:"name"`
	ServerImportFailure       *int64            `json:"serverImportFailure"`
	ServerImportSuccess       *int64            `json:"serverImportSuccess"`
	Status                    *ImportStatusEnum `json:"status"`
}
