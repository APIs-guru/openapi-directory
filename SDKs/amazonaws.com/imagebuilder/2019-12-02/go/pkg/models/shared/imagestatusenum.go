package shared




type ImageStatusEnum string

const (
    ImageStatusEnumPending ImageStatusEnum = "PENDING"
ImageStatusEnumCreating ImageStatusEnum = "CREATING"
ImageStatusEnumBuilding ImageStatusEnum = "BUILDING"
ImageStatusEnumTesting ImageStatusEnum = "TESTING"
ImageStatusEnumDistributing ImageStatusEnum = "DISTRIBUTING"
ImageStatusEnumIntegrating ImageStatusEnum = "INTEGRATING"
ImageStatusEnumAvailable ImageStatusEnum = "AVAILABLE"
ImageStatusEnumCancelled ImageStatusEnum = "CANCELLED"
ImageStatusEnumFailed ImageStatusEnum = "FAILED"
ImageStatusEnumDeprecated ImageStatusEnum = "DEPRECATED"
ImageStatusEnumDeleted ImageStatusEnum = "DELETED"
)


