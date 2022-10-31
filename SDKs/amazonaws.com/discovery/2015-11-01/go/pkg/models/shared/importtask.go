package shared

import (
"time")

type ImportTask struct {
    ApplicationImportFailure *int64 `json:"applicationImportFailure,omitempty"`
    ApplicationImportSuccess *int64 `json:"applicationImportSuccess,omitempty"`
    ClientRequestToken *string `json:"clientRequestToken,omitempty"`
    ErrorsAndFailedEntriesZip *string `json:"errorsAndFailedEntriesZip,omitempty"`
    ImportCompletionTime *time.Time `json:"importCompletionTime,omitempty"`
    ImportDeletedTime *time.Time `json:"importDeletedTime,omitempty"`
    ImportRequestTime *time.Time `json:"importRequestTime,omitempty"`
    ImportTaskID *string `json:"importTaskId,omitempty"`
    ImportURL *string `json:"importUrl,omitempty"`
    Name *string `json:"name,omitempty"`
    ServerImportFailure *int64 `json:"serverImportFailure,omitempty"`
    ServerImportSuccess *int64 `json:"serverImportSuccess,omitempty"`
    Status *ImportStatusEnum `json:"status,omitempty"`
    
}

