


export enum ManagedCredentialsStatusEnum {
    EnabledOnCreate = "ENABLED_ON_CREATE",
    EnabledByOwner = "ENABLED_BY_OWNER",
    DisabledByDefault = "DISABLED_BY_DEFAULT",
    DisabledByOwner = "DISABLED_BY_OWNER",
    DisabledByCollaborator = "DISABLED_BY_COLLABORATOR",
    PendingRemovalByCollaborator = "PENDING_REMOVAL_BY_COLLABORATOR",
    PendingStartRemovalByCollaborator = "PENDING_START_REMOVAL_BY_COLLABORATOR",
    PendingRemovalByOwner = "PENDING_REMOVAL_BY_OWNER",
    PendingStartRemovalByOwner = "PENDING_START_REMOVAL_BY_OWNER",
    FailedRemovalByCollaborator = "FAILED_REMOVAL_BY_COLLABORATOR",
    FailedRemovalByOwner = "FAILED_REMOVAL_BY_OWNER"
}
