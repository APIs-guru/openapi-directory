package shared

type ContainerRecipe struct {
	Arn                    *string                    `json:"arn"`
	Components             []ComponentConfiguration   `json:"components"`
	ContainerType          *ContainerTypeEnum         `json:"containerType"`
	DateCreated            *string                    `json:"dateCreated"`
	Description            *string                    `json:"description"`
	DockerfileTemplateData *string                    `json:"dockerfileTemplateData"`
	Encrypted              *bool                      `json:"encrypted"`
	InstanceConfiguration  *InstanceConfiguration     `json:"instanceConfiguration"`
	KmsKeyID               *string                    `json:"kmsKeyId"`
	Name                   *string                    `json:"name"`
	Owner                  *string                    `json:"owner"`
	ParentImage            *string                    `json:"parentImage"`
	Platform               *PlatformEnum              `json:"platform"`
	Tags                   map[string]string          `json:"tags"`
	TargetRepository       *TargetContainerRepository `json:"targetRepository"`
	Version                *string                    `json:"version"`
	WorkingDirectory       *string                    `json:"workingDirectory"`
}
