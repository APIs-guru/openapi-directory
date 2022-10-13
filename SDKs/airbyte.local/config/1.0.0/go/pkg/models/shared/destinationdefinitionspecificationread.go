package shared

type DestinationDefinitionSpecificationRead struct {
	ConnectionSpecification       *interface{}              `json:"connectionSpecification"`
	DestinationDefinitionID       string                    `json:"destinationDefinitionId"`
	DocumentationURL              *string                   `json:"documentationUrl"`
	JobInfo                       SynchronousJobRead        `json:"jobInfo"`
	SupportedDestinationSyncModes []DestinationSyncModeEnum `json:"supportedDestinationSyncModes"`
	SupportsDbt                   *bool                     `json:"supportsDbt"`
	SupportsNormalization         *bool                     `json:"supportsNormalization"`
}
