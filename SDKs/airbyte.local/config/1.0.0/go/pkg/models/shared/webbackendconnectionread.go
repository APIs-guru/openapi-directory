package shared

type WebBackendConnectionRead struct {
	ConnectionID           string                       `json:"connectionId"`
	Destination            DestinationRead              `json:"destination"`
	DestinationID          string                       `json:"destinationId"`
	IsSyncing              bool                         `json:"isSyncing"`
	LatestSyncJobCreatedAt *int64                       `json:"latestSyncJobCreatedAt,omitempty"`
	LatestSyncJobStatus    *JobStatusEnum               `json:"latestSyncJobStatus,omitempty"`
	Name                   string                       `json:"name"`
	NamespaceDefinition    *NamespaceDefinitionTypeEnum `json:"namespaceDefinition,omitempty"`
	NamespaceFormat        *string                      `json:"namespaceFormat,omitempty"`
	OperationIds           []string                     `json:"operationIds,omitempty"`
	Operations             []OperationRead              `json:"operations,omitempty"`
	Prefix                 *string                      `json:"prefix,omitempty"`
	ResourceRequirements   *ResourceRequirements        `json:"resourceRequirements,omitempty"`
	Schedule               *ConnectionSchedule          `json:"schedule,omitempty"`
	Source                 SourceRead                   `json:"source"`
	SourceID               string                       `json:"sourceId"`
	Status                 ConnectionStatusEnum         `json:"status"`
	SyncCatalog            AirbyteCatalog               `json:"syncCatalog"`
}
