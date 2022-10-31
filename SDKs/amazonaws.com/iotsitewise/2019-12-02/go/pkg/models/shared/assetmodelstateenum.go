package shared




type AssetModelStateEnum string

const (
    AssetModelStateEnumCreating AssetModelStateEnum = "CREATING"
AssetModelStateEnumActive AssetModelStateEnum = "ACTIVE"
AssetModelStateEnumUpdating AssetModelStateEnum = "UPDATING"
AssetModelStateEnumPropagating AssetModelStateEnum = "PROPAGATING"
AssetModelStateEnumDeleting AssetModelStateEnum = "DELETING"
AssetModelStateEnumFailed AssetModelStateEnum = "FAILED"
)


