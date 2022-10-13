package shared

import (
	"time"
)

type FileSystem struct {
	AdministrativeActions []AdministrativeAction          `json:"AdministrativeActions"`
	CreationTime          *time.Time                      `json:"CreationTime"`
	DNSName               *string                         `json:"DNSName"`
	FailureDetails        *FileSystemFailureDetails       `json:"FailureDetails"`
	FileSystemID          *string                         `json:"FileSystemId"`
	FileSystemType        *FileSystemTypeEnum             `json:"FileSystemType"`
	KmsKeyID              *string                         `json:"KmsKeyId"`
	Lifecycle             *FileSystemLifecycleEnum        `json:"Lifecycle"`
	LustreConfiguration   *LustreFileSystemConfiguration  `json:"LustreConfiguration"`
	NetworkInterfaceIds   []string                        `json:"NetworkInterfaceIds"`
	OntapConfiguration    *OntapFileSystemConfiguration   `json:"OntapConfiguration"`
	OwnerID               *string                         `json:"OwnerId"`
	ResourceArn           *string                         `json:"ResourceARN"`
	StorageCapacity       *int64                          `json:"StorageCapacity"`
	StorageType           *StorageTypeEnum                `json:"StorageType"`
	SubnetIds             []string                        `json:"SubnetIds"`
	Tags                  []Tag                           `json:"Tags"`
	VpcID                 *string                         `json:"VpcId"`
	WindowsConfiguration  *WindowsFileSystemConfiguration `json:"WindowsConfiguration"`
}
