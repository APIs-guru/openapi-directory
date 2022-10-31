package shared




type ImageStateEnum string

const (
    ImageStateEnumPending ImageStateEnum = "PENDING"
ImageStateEnumAvailable ImageStateEnum = "AVAILABLE"
ImageStateEnumFailed ImageStateEnum = "FAILED"
ImageStateEnumCopying ImageStateEnum = "COPYING"
ImageStateEnumDeleting ImageStateEnum = "DELETING"
ImageStateEnumCreating ImageStateEnum = "CREATING"
ImageStateEnumImporting ImageStateEnum = "IMPORTING"
)


