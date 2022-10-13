package shared

type Component struct {
	Arn                 *string                    `json:"arn"`
	ChangeDescription   *string                    `json:"changeDescription"`
	Data                *string                    `json:"data"`
	DateCreated         *string                    `json:"dateCreated"`
	Description         *string                    `json:"description"`
	Encrypted           *bool                      `json:"encrypted"`
	KmsKeyID            *string                    `json:"kmsKeyId"`
	Name                *string                    `json:"name"`
	Owner               *string                    `json:"owner"`
	Parameters          []ComponentParameterDetail `json:"parameters"`
	Platform            *PlatformEnum              `json:"platform"`
	SupportedOsVersions []string                   `json:"supportedOsVersions"`
	Tags                map[string]string          `json:"tags"`
	Type                *ComponentTypeEnum         `json:"type"`
	Version             *string                    `json:"version"`
}
