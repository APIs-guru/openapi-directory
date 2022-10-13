package shared

type WebBackendConnectionUpdate struct {
	ConnectionID         string                              `json:"connectionId"`
	NamespaceDefinition  *NamespaceDefinitionTypeEnum        `json:"namespaceDefinition"`
	NamespaceFormat      *string                             `json:"namespaceFormat"`
	OperationIds         []string                            `json:"operationIds"`
	Operations           []WebBackendOperationCreateOrUpdate `json:"operations"`
	Prefix               *string                             `json:"prefix"`
	ResourceRequirements *ResourceRequirements               `json:"resourceRequirements"`
	Schedule             *ConnectionSchedule                 `json:"schedule"`
	Status               ConnectionStatusEnum                `json:"status"`
	SyncCatalog          AirbyteCatalog                      `json:"syncCatalog"`
	WithRefreshedCatalog *bool                               `json:"withRefreshedCatalog"`
}
