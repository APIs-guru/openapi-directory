package shared

type WebBackendConnectionRead struct {
	ConnectionID           string                       `json:"connectionId"`
	Destination            DestinationRead              `json:"destination"`
	DestinationID          string                       `json:"destinationId"`
	IsSyncing              bool                         `json:"isSyncing"`
	LatestSyncJobCreatedAt *int64                       `json:"latestSyncJobCreatedAt"`
	LatestSyncJobStatus    *JobStatusEnum               `json:"latestSyncJobStatus"`
	Name                   string                       `json:"name"`
	NamespaceDefinition    *NamespaceDefinitionTypeEnum `json:"namespaceDefinition"`
	NamespaceFormat        *string                      `json:"namespaceFormat"`
	OperationIds           []string                     `json:"operationIds"`
	Operations             []OperationRead              `json:"operations"`
	Prefix                 *string                      `json:"prefix"`
	ResourceRequirements   *ResourceRequirements        `json:"resourceRequirements"`
	Schedule               *ConnectionSchedule          `json:"schedule"`
	Source                 SourceRead                   `json:"source"`
	SourceID               string                       `json:"sourceId"`
	Status                 ConnectionStatusEnum         `json:"status"`
	SyncCatalog            AirbyteCatalog               `json:"syncCatalog"`
}
