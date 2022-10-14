package shared

type RegisterContainerInstanceRequest struct {
	Attributes                        []Attribute      `json:"attributes,omitempty"`
	Cluster                           *string          `json:"cluster,omitempty"`
	ContainerInstanceArn              *string          `json:"containerInstanceArn,omitempty"`
	InstanceIdentityDocument          *string          `json:"instanceIdentityDocument,omitempty"`
	InstanceIdentityDocumentSignature *string          `json:"instanceIdentityDocumentSignature,omitempty"`
	PlatformDevices                   []PlatformDevice `json:"platformDevices,omitempty"`
	Tags                              []Tag            `json:"tags,omitempty"`
	TotalResources                    []Resource       `json:"totalResources,omitempty"`
	VersionInfo                       *VersionInfo     `json:"versionInfo,omitempty"`
}
