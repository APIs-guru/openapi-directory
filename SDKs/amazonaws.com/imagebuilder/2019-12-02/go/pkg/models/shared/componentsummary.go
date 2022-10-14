package shared

type ComponentSummary struct {
	Arn                 *string            `json:"arn,omitempty"`
	ChangeDescription   *string            `json:"changeDescription,omitempty"`
	DateCreated         *string            `json:"dateCreated,omitempty"`
	Description         *string            `json:"description,omitempty"`
	Name                *string            `json:"name,omitempty"`
	Owner               *string            `json:"owner,omitempty"`
	Platform            *PlatformEnum      `json:"platform,omitempty"`
	SupportedOsVersions []string           `json:"supportedOsVersions,omitempty"`
	Tags                map[string]string  `json:"tags,omitempty"`
	Type                *ComponentTypeEnum `json:"type,omitempty"`
	Version             *string            `json:"version,omitempty"`
}
