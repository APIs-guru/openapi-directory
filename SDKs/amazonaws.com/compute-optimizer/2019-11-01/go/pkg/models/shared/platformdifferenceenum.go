package shared

type PlatformDifferenceEnum string

const (
	PlatformDifferenceEnumHypervisor                PlatformDifferenceEnum = "Hypervisor"
	PlatformDifferenceEnumNetworkInterface          PlatformDifferenceEnum = "NetworkInterface"
	PlatformDifferenceEnumStorageInterface          PlatformDifferenceEnum = "StorageInterface"
	PlatformDifferenceEnumInstanceStoreAvailability PlatformDifferenceEnum = "InstanceStoreAvailability"
	PlatformDifferenceEnumVirtualizationType        PlatformDifferenceEnum = "VirtualizationType"
	PlatformDifferenceEnumArchitecture              PlatformDifferenceEnum = "Architecture"
)
