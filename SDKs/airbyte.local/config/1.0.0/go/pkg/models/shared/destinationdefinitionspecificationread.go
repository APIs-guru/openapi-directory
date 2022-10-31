package shared



type DestinationDefinitionSpecificationRead struct {
    ConnectionSpecification *interface{} `json:"connectionSpecification,omitempty"`
    DestinationDefinitionID string `json:"destinationDefinitionId"`
    DocumentationURL *string `json:"documentationUrl,omitempty"`
    JobInfo SynchronousJobRead `json:"jobInfo"`
    SupportedDestinationSyncModes []DestinationSyncModeEnum `json:"supportedDestinationSyncModes,omitempty"`
    SupportsDbt *bool `json:"supportsDbt,omitempty"`
    SupportsNormalization *bool `json:"supportsNormalization,omitempty"`
    
}

