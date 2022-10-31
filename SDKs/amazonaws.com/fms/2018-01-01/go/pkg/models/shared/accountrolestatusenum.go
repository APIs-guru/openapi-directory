package shared




type AccountRoleStatusEnum string

const (
    AccountRoleStatusEnumReady AccountRoleStatusEnum = "READY"
AccountRoleStatusEnumCreating AccountRoleStatusEnum = "CREATING"
AccountRoleStatusEnumPendingDeletion AccountRoleStatusEnum = "PENDING_DELETION"
AccountRoleStatusEnumDeleting AccountRoleStatusEnum = "DELETING"
AccountRoleStatusEnumDeleted AccountRoleStatusEnum = "DELETED"
)


