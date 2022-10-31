package shared




type FileSystemLifecycleEnum string

const (
    FileSystemLifecycleEnumAvailable FileSystemLifecycleEnum = "AVAILABLE"
FileSystemLifecycleEnumCreating FileSystemLifecycleEnum = "CREATING"
FileSystemLifecycleEnumFailed FileSystemLifecycleEnum = "FAILED"
FileSystemLifecycleEnumDeleting FileSystemLifecycleEnum = "DELETING"
FileSystemLifecycleEnumMisconfigured FileSystemLifecycleEnum = "MISCONFIGURED"
FileSystemLifecycleEnumUpdating FileSystemLifecycleEnum = "UPDATING"
)


