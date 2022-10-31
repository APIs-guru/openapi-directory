package shared




type DomainControllerStatusEnum string

const (
    DomainControllerStatusEnumCreating DomainControllerStatusEnum = "Creating"
DomainControllerStatusEnumActive DomainControllerStatusEnum = "Active"
DomainControllerStatusEnumImpaired DomainControllerStatusEnum = "Impaired"
DomainControllerStatusEnumRestoring DomainControllerStatusEnum = "Restoring"
DomainControllerStatusEnumDeleting DomainControllerStatusEnum = "Deleting"
DomainControllerStatusEnumDeleted DomainControllerStatusEnum = "Deleted"
DomainControllerStatusEnumFailed DomainControllerStatusEnum = "Failed"
)


