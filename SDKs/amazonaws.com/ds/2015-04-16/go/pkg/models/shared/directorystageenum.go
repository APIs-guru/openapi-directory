package shared




type DirectoryStageEnum string

const (
    DirectoryStageEnumRequested DirectoryStageEnum = "Requested"
DirectoryStageEnumCreating DirectoryStageEnum = "Creating"
DirectoryStageEnumCreated DirectoryStageEnum = "Created"
DirectoryStageEnumActive DirectoryStageEnum = "Active"
DirectoryStageEnumInoperable DirectoryStageEnum = "Inoperable"
DirectoryStageEnumImpaired DirectoryStageEnum = "Impaired"
DirectoryStageEnumRestoring DirectoryStageEnum = "Restoring"
DirectoryStageEnumRestoreFailed DirectoryStageEnum = "RestoreFailed"
DirectoryStageEnumDeleting DirectoryStageEnum = "Deleting"
DirectoryStageEnumDeleted DirectoryStageEnum = "Deleted"
DirectoryStageEnumFailed DirectoryStageEnum = "Failed"
)


