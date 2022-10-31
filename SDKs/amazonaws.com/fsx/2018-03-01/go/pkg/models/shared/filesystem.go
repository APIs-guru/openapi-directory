package shared

import (
	"time"
)

type FileSystem struct {
	AdministrativeActions []AdministrativeAction          `json:"AdministrativeActions,omitempty"`
	CreationTime          *time.Time                      `json:"CreationTime,omitempty"`
	DNSName               *string                         `json:"DNSName,omitempty"`
	FailureDetails        *FileSystemFailureDetails       `json:"FailureDetails,omitempty"`
	FileSystemID          *string                         `json:"FileSystemId,omitempty"`
	FileSystemType        *FileSystemTypeEnum             `json:"FileSystemType,omitempty"`
	KmsKeyID              *string                         `json:"KmsKeyId,omitempty"`
	Lifecycle             *FileSystemLifecycleEnum        `json:"Lifecycle,omitempty"`
	LustreConfiguration   *LustreFileSystemConfiguration  `json:"LustreConfiguration,omitempty"`
	NetworkInterfaceIds   []string                        `json:"NetworkInterfaceIds,omitempty"`
	OntapConfiguration    *OntapFileSystemConfiguration   `json:"OntapConfiguration,omitempty"`
	OwnerID               *string                         `json:"OwnerId,omitempty"`
	ResourceArn           *string                         `json:"ResourceARN,omitempty"`
	StorageCapacity       *int64                          `json:"StorageCapacity,omitempty"`
	StorageType           *StorageTypeEnum                `json:"StorageType,omitempty"`
	SubnetIds             []string                        `json:"SubnetIds,omitempty"`
	Tags                  []Tag                           `json:"Tags,omitempty"`
	VpcID                 *string                         `json:"VpcId,omitempty"`
	WindowsConfiguration  *WindowsFileSystemConfiguration `json:"WindowsConfiguration,omitempty"`
}
