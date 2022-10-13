package shared

type ConnectionCreate struct {
	DestinationID        string                       `json:"destinationId"`
	Name                 *string                      `json:"name"`
	NamespaceDefinition  *NamespaceDefinitionTypeEnum `json:"namespaceDefinition"`
	NamespaceFormat      *string                      `json:"namespaceFormat"`
	OperationIds         []string                     `json:"operationIds"`
	Prefix               *string                      `json:"prefix"`
	ResourceRequirements *ResourceRequirements        `json:"resourceRequirements"`
	Schedule             *ConnectionSchedule          `json:"schedule"`
	SourceID             string                       `json:"sourceId"`
	Status               ConnectionStatusEnum         `json:"status"`
	SyncCatalog          *AirbyteCatalog              `json:"syncCatalog"`
}
