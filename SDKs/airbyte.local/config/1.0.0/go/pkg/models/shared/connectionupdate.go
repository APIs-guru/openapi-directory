package shared

type ConnectionUpdate struct {
	ConnectionID         string                       `json:"connectionId"`
	NamespaceDefinition  *NamespaceDefinitionTypeEnum `json:"namespaceDefinition"`
	NamespaceFormat      *string                      `json:"namespaceFormat"`
	OperationIds         []string                     `json:"operationIds"`
	Prefix               *string                      `json:"prefix"`
	ResourceRequirements *ResourceRequirements        `json:"resourceRequirements"`
	Schedule             *ConnectionSchedule          `json:"schedule"`
	Status               ConnectionStatusEnum         `json:"status"`
	SyncCatalog          AirbyteCatalog               `json:"syncCatalog"`
}
