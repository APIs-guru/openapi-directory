package shared

type ListRecordsResponse struct {
	Count                                 *int64   `json:"Count,omitempty"`
	DatasetDeletedAfterRequestedSyncCount *bool    `json:"DatasetDeletedAfterRequestedSyncCount,omitempty"`
	DatasetExists                         *bool    `json:"DatasetExists,omitempty"`
	DatasetSyncCount                      *int64   `json:"DatasetSyncCount,omitempty"`
	LastModifiedBy                        *string  `json:"LastModifiedBy,omitempty"`
	MergedDatasetNames                    []string `json:"MergedDatasetNames,omitempty"`
	NextToken                             *string  `json:"NextToken,omitempty"`
	Records                               []Record `json:"Records,omitempty"`
	SyncSessionToken                      *string  `json:"SyncSessionToken,omitempty"`
}
