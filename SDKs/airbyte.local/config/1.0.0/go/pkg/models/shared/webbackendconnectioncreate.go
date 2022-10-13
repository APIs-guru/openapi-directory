package shared

type WebBackendConnectionCreate struct {
	DestinationID        string                       `json:"destinationId"`
	Name                 *string                      `json:"name"`
	NamespaceDefinition  *NamespaceDefinitionTypeEnum `json:"namespaceDefinition"`
	NamespaceFormat      *string                      `json:"namespaceFormat"`
	OperationIds         []string                     `json:"operationIds"`
	Operations           []OperationCreate            `json:"operations"`
	Prefix               *string                      `json:"prefix"`
	ResourceRequirements *ResourceRequirements        `json:"resourceRequirements"`
	Schedule             *ConnectionSchedule          `json:"schedule"`
	SourceID             string                       `json:"sourceId"`
	Status               ConnectionStatusEnum         `json:"status"`
	SyncCatalog          *AirbyteCatalog              `json:"syncCatalog"`
}
