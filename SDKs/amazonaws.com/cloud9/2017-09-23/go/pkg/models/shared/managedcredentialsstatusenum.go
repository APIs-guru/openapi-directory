package shared

type ManagedCredentialsStatusEnum string

const (
	ManagedCredentialsStatusEnumEnabledOnCreate                   ManagedCredentialsStatusEnum = "ENABLED_ON_CREATE"
	ManagedCredentialsStatusEnumEnabledByOwner                    ManagedCredentialsStatusEnum = "ENABLED_BY_OWNER"
	ManagedCredentialsStatusEnumDisabledByDefault                 ManagedCredentialsStatusEnum = "DISABLED_BY_DEFAULT"
	ManagedCredentialsStatusEnumDisabledByOwner                   ManagedCredentialsStatusEnum = "DISABLED_BY_OWNER"
	ManagedCredentialsStatusEnumDisabledByCollaborator            ManagedCredentialsStatusEnum = "DISABLED_BY_COLLABORATOR"
	ManagedCredentialsStatusEnumPendingRemovalByCollaborator      ManagedCredentialsStatusEnum = "PENDING_REMOVAL_BY_COLLABORATOR"
	ManagedCredentialsStatusEnumPendingStartRemovalByCollaborator ManagedCredentialsStatusEnum = "PENDING_START_REMOVAL_BY_COLLABORATOR"
	ManagedCredentialsStatusEnumPendingRemovalByOwner             ManagedCredentialsStatusEnum = "PENDING_REMOVAL_BY_OWNER"
	ManagedCredentialsStatusEnumPendingStartRemovalByOwner        ManagedCredentialsStatusEnum = "PENDING_START_REMOVAL_BY_OWNER"
	ManagedCredentialsStatusEnumFailedRemovalByCollaborator       ManagedCredentialsStatusEnum = "FAILED_REMOVAL_BY_COLLABORATOR"
	ManagedCredentialsStatusEnumFailedRemovalByOwner              ManagedCredentialsStatusEnum = "FAILED_REMOVAL_BY_OWNER"
)
