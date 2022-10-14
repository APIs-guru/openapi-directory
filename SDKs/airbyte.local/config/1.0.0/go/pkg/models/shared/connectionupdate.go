package shared

type ConnectionUpdate struct {
	ConnectionID         string                       `json:"connectionId"`
	NamespaceDefinition  *NamespaceDefinitionTypeEnum `json:"namespaceDefinition,omitempty"`
	NamespaceFormat      *string                      `json:"namespaceFormat,omitempty"`
	OperationIds         []string                     `json:"operationIds,omitempty"`
	Prefix               *string                      `json:"prefix,omitempty"`
	ResourceRequirements *ResourceRequirements        `json:"resourceRequirements,omitempty"`
	Schedule             *ConnectionSchedule          `json:"schedule,omitempty"`
	Status               ConnectionStatusEnum         `json:"status"`
	SyncCatalog          AirbyteCatalog               `json:"syncCatalog"`
}
