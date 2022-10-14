package shared

type GlacierJobDescription struct {
	Action                       *ActionCodeEnum                   `json:"Action,omitempty"`
	ArchiveID                    *string                           `json:"ArchiveId,omitempty"`
	ArchiveSha256TreeHash        *string                           `json:"ArchiveSHA256TreeHash,omitempty"`
	ArchiveSizeInBytes           *int64                            `json:"ArchiveSizeInBytes,omitempty"`
	Completed                    *bool                             `json:"Completed,omitempty"`
	CompletionDate               *string                           `json:"CompletionDate,omitempty"`
	CreationDate                 *string                           `json:"CreationDate,omitempty"`
	InventoryRetrievalParameters *InventoryRetrievalJobDescription `json:"InventoryRetrievalParameters,omitempty"`
	InventorySizeInBytes         *int64                            `json:"InventorySizeInBytes,omitempty"`
	JobDescription               *string                           `json:"JobDescription,omitempty"`
	JobID                        *string                           `json:"JobId,omitempty"`
	JobOutputPath                *string                           `json:"JobOutputPath,omitempty"`
	OutputLocation               *OutputLocation                   `json:"OutputLocation,omitempty"`
	RetrievalByteRange           *string                           `json:"RetrievalByteRange,omitempty"`
	Sha256TreeHash               *string                           `json:"SHA256TreeHash,omitempty"`
	SnsTopic                     *string                           `json:"SNSTopic,omitempty"`
	SelectParameters             *SelectParameters                 `json:"SelectParameters,omitempty"`
	StatusCode                   *StatusCodeEnum                   `json:"StatusCode,omitempty"`
	StatusMessage                *string                           `json:"StatusMessage,omitempty"`
	Tier                         *string                           `json:"Tier,omitempty"`
	VaultArn                     *string                           `json:"VaultARN,omitempty"`
}
