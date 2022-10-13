package shared

type ComponentVersion struct {
	Arn                 *string            `json:"arn"`
	DateCreated         *string            `json:"dateCreated"`
	Description         *string            `json:"description"`
	Name                *string            `json:"name"`
	Owner               *string            `json:"owner"`
	Platform            *PlatformEnum      `json:"platform"`
	SupportedOsVersions []string           `json:"supportedOsVersions"`
	Type                *ComponentTypeEnum `json:"type"`
	Version             *string            `json:"version"`
}
