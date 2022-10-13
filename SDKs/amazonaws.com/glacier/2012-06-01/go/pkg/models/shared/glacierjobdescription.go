package shared

type GlacierJobDescription struct {
	Action                       *ActionCodeEnum                   `json:"Action"`
	ArchiveID                    *string                           `json:"ArchiveId"`
	ArchiveSha256TreeHash        *string                           `json:"ArchiveSHA256TreeHash"`
	ArchiveSizeInBytes           *int64                            `json:"ArchiveSizeInBytes"`
	Completed                    *bool                             `json:"Completed"`
	CompletionDate               *string                           `json:"CompletionDate"`
	CreationDate                 *string                           `json:"CreationDate"`
	InventoryRetrievalParameters *InventoryRetrievalJobDescription `json:"InventoryRetrievalParameters"`
	InventorySizeInBytes         *int64                            `json:"InventorySizeInBytes"`
	JobDescription               *string                           `json:"JobDescription"`
	JobID                        *string                           `json:"JobId"`
	JobOutputPath                *string                           `json:"JobOutputPath"`
	OutputLocation               *OutputLocation                   `json:"OutputLocation"`
	RetrievalByteRange           *string                           `json:"RetrievalByteRange"`
	Sha256TreeHash               *string                           `json:"SHA256TreeHash"`
	SnsTopic                     *string                           `json:"SNSTopic"`
	SelectParameters             *SelectParameters                 `json:"SelectParameters"`
	StatusCode                   *StatusCodeEnum                   `json:"StatusCode"`
	StatusMessage                *string                           `json:"StatusMessage"`
	Tier                         *string                           `json:"Tier"`
	VaultArn                     *string                           `json:"VaultARN"`
}
