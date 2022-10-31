package shared



type WebBackendConnectionCreate struct {
    DestinationID string `json:"destinationId"`
    Name *string `json:"name,omitempty"`
    NamespaceDefinition *NamespaceDefinitionTypeEnum `json:"namespaceDefinition,omitempty"`
    NamespaceFormat *string `json:"namespaceFormat,omitempty"`
    OperationIds []string `json:"operationIds,omitempty"`
    Operations []OperationCreate `json:"operations,omitempty"`
    Prefix *string `json:"prefix,omitempty"`
    ResourceRequirements *ResourceRequirements `json:"resourceRequirements,omitempty"`
    Schedule *ConnectionSchedule `json:"schedule,omitempty"`
    SourceID string `json:"sourceId"`
    Status ConnectionStatusEnum `json:"status"`
    SyncCatalog *AirbyteCatalog `json:"syncCatalog,omitempty"`
    
}

