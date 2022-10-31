package shared




type AssetStateEnum string

const (
    AssetStateEnumCreating AssetStateEnum = "CREATING"
AssetStateEnumActive AssetStateEnum = "ACTIVE"
AssetStateEnumUpdating AssetStateEnum = "UPDATING"
AssetStateEnumDeleting AssetStateEnum = "DELETING"
AssetStateEnumFailed AssetStateEnum = "FAILED"
)


