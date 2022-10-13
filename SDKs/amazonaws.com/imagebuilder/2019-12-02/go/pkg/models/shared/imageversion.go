package shared

type ImageVersion struct {
	Arn         *string        `json:"arn"`
	DateCreated *string        `json:"dateCreated"`
	Name        *string        `json:"name"`
	OsVersion   *string        `json:"osVersion"`
	Owner       *string        `json:"owner"`
	Platform    *PlatformEnum  `json:"platform"`
	Type        *ImageTypeEnum `json:"type"`
	Version     *string        `json:"version"`
}
