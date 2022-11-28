package shared

// Component
// A detailed view of a component.
type Component struct {
	Arn                 *string                    `json:"arn,omitempty"`
	ChangeDescription   *string                    `json:"changeDescription,omitempty"`
	Data                *string                    `json:"data,omitempty"`
	DateCreated         *string                    `json:"dateCreated,omitempty"`
	Description         *string                    `json:"description,omitempty"`
	Encrypted           *bool                      `json:"encrypted,omitempty"`
	KmsKeyID            *string                    `json:"kmsKeyId,omitempty"`
	Name                *string                    `json:"name,omitempty"`
	Owner               *string                    `json:"owner,omitempty"`
	Parameters          []ComponentParameterDetail `json:"parameters,omitempty"`
	Platform            *PlatformEnum              `json:"platform,omitempty"`
	SupportedOsVersions []string                   `json:"supportedOsVersions,omitempty"`
	Tags                map[string]string          `json:"tags,omitempty"`
	Type                *ComponentTypeEnum         `json:"type,omitempty"`
	Version             *string                    `json:"version,omitempty"`
}
