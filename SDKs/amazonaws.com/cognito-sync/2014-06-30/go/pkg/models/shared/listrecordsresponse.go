package shared

type ListRecordsResponse struct {
	Count                                 *int64   `json:"Count"`
	DatasetDeletedAfterRequestedSyncCount *bool    `json:"DatasetDeletedAfterRequestedSyncCount"`
	DatasetExists                         *bool    `json:"DatasetExists"`
	DatasetSyncCount                      *int64   `json:"DatasetSyncCount"`
	LastModifiedBy                        *string  `json:"LastModifiedBy"`
	MergedDatasetNames                    []string `json:"MergedDatasetNames"`
	NextToken                             *string  `json:"NextToken"`
	Records                               []Record `json:"Records"`
	SyncSessionToken                      *string  `json:"SyncSessionToken"`
}
