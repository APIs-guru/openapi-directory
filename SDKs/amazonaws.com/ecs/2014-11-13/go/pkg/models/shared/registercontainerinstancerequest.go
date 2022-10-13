package shared

type RegisterContainerInstanceRequest struct {
	Attributes                        []Attribute      `json:"attributes"`
	Cluster                           *string          `json:"cluster"`
	ContainerInstanceArn              *string          `json:"containerInstanceArn"`
	InstanceIdentityDocument          *string          `json:"instanceIdentityDocument"`
	InstanceIdentityDocumentSignature *string          `json:"instanceIdentityDocumentSignature"`
	PlatformDevices                   []PlatformDevice `json:"platformDevices"`
	Tags                              []Tag            `json:"tags"`
	TotalResources                    []Resource       `json:"totalResources"`
	VersionInfo                       *VersionInfo     `json:"versionInfo"`
}
