package shared

type ImageSummary struct {
	Arn             *string           `json:"arn"`
	DateCreated     *string           `json:"dateCreated"`
	Name            *string           `json:"name"`
	OsVersion       *string           `json:"osVersion"`
	OutputResources *OutputResources  `json:"outputResources"`
	Owner           *string           `json:"owner"`
	Platform        *PlatformEnum     `json:"platform"`
	State           *ImageState       `json:"state"`
	Tags            map[string]string `json:"tags"`
	Type            *ImageTypeEnum    `json:"type"`
	Version         *string           `json:"version"`
}
