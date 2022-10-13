package shared

type ImageRecipe struct {
	AdditionalInstanceConfiguration *AdditionalInstanceConfiguration `json:"additionalInstanceConfiguration"`
	Arn                             *string                          `json:"arn"`
	BlockDeviceMappings             []InstanceBlockDeviceMapping     `json:"blockDeviceMappings"`
	Components                      []ComponentConfiguration         `json:"components"`
	DateCreated                     *string                          `json:"dateCreated"`
	Description                     *string                          `json:"description"`
	Name                            *string                          `json:"name"`
	Owner                           *string                          `json:"owner"`
	ParentImage                     *string                          `json:"parentImage"`
	Platform                        *PlatformEnum                    `json:"platform"`
	Tags                            map[string]string                `json:"tags"`
	Type                            *ImageTypeEnum                   `json:"type"`
	Version                         *string                          `json:"version"`
	WorkingDirectory                *string                          `json:"workingDirectory"`
}
