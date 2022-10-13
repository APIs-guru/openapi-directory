package shared

import (
	"time"
)

type StorageVirtualMachine struct {
	ActiveDirectoryConfiguration *SvmActiveDirectoryConfiguration                  `json:"ActiveDirectoryConfiguration"`
	CreationTime                 *time.Time                                        `json:"CreationTime"`
	Endpoints                    *SvmEndpoints                                     `json:"Endpoints"`
	FileSystemID                 *string                                           `json:"FileSystemId"`
	Lifecycle                    *StorageVirtualMachineLifecycleEnum               `json:"Lifecycle"`
	LifecycleTransitionReason    *LifecycleTransitionReason                        `json:"LifecycleTransitionReason"`
	Name                         *string                                           `json:"Name"`
	ResourceArn                  *string                                           `json:"ResourceARN"`
	RootVolumeSecurityStyle      *StorageVirtualMachineRootVolumeSecurityStyleEnum `json:"RootVolumeSecurityStyle"`
	StorageVirtualMachineID      *string                                           `json:"StorageVirtualMachineId"`
	Subtype                      *StorageVirtualMachineSubtypeEnum                 `json:"Subtype"`
	Tags                         []Tag                                             `json:"Tags"`
	UUID                         *string                                           `json:"UUID"`
}
