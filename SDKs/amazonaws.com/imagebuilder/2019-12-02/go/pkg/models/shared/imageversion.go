package shared

// ImageVersion
// The defining characteristics of a specific version of an Image Builder image.
type ImageVersion struct {
	Arn         *string        `json:"arn,omitempty"`
	DateCreated *string        `json:"dateCreated,omitempty"`
	Name        *string        `json:"name,omitempty"`
	OsVersion   *string        `json:"osVersion,omitempty"`
	Owner       *string        `json:"owner,omitempty"`
	Platform    *PlatformEnum  `json:"platform,omitempty"`
	Type        *ImageTypeEnum `json:"type,omitempty"`
	Version     *string        `json:"version,omitempty"`
}
