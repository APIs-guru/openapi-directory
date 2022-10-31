package shared




type WorkspaceStatusCodeEnum string

const (
    WorkspaceStatusCodeEnumCreating WorkspaceStatusCodeEnum = "CREATING"
WorkspaceStatusCodeEnumActive WorkspaceStatusCodeEnum = "ACTIVE"
WorkspaceStatusCodeEnumUpdating WorkspaceStatusCodeEnum = "UPDATING"
WorkspaceStatusCodeEnumDeleting WorkspaceStatusCodeEnum = "DELETING"
WorkspaceStatusCodeEnumCreationFailed WorkspaceStatusCodeEnum = "CREATION_FAILED"
)


