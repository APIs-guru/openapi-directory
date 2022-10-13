package shared

type ComponentSummary struct {
	Arn                 *string            `json:"arn"`
	ChangeDescription   *string            `json:"changeDescription"`
	DateCreated         *string            `json:"dateCreated"`
	Description         *string            `json:"description"`
	Name                *string            `json:"name"`
	Owner               *string            `json:"owner"`
	Platform            *PlatformEnum      `json:"platform"`
	SupportedOsVersions []string           `json:"supportedOsVersions"`
	Tags                map[string]string  `json:"tags"`
	Type                *ComponentTypeEnum `json:"type"`
	Version             *string            `json:"version"`
}
