package shared

import (
	"time"
)

// StorageVirtualMachine
// Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuraton.
type StorageVirtualMachine struct {
	ActiveDirectoryConfiguration *SvmActiveDirectoryConfiguration                  `json:"ActiveDirectoryConfiguration,omitempty"`
	CreationTime                 *time.Time                                        `json:"CreationTime,omitempty"`
	Endpoints                    *SvmEndpoints                                     `json:"Endpoints,omitempty"`
	FileSystemID                 *string                                           `json:"FileSystemId,omitempty"`
	Lifecycle                    *StorageVirtualMachineLifecycleEnum               `json:"Lifecycle,omitempty"`
	LifecycleTransitionReason    *LifecycleTransitionReason                        `json:"LifecycleTransitionReason,omitempty"`
	Name                         *string                                           `json:"Name,omitempty"`
	ResourceArn                  *string                                           `json:"ResourceARN,omitempty"`
	RootVolumeSecurityStyle      *StorageVirtualMachineRootVolumeSecurityStyleEnum `json:"RootVolumeSecurityStyle,omitempty"`
	StorageVirtualMachineID      *string                                           `json:"StorageVirtualMachineId,omitempty"`
	Subtype                      *StorageVirtualMachineSubtypeEnum                 `json:"Subtype,omitempty"`
	Tags                         []Tag                                             `json:"Tags,omitempty"`
	UUID                         *string                                           `json:"UUID,omitempty"`
}
