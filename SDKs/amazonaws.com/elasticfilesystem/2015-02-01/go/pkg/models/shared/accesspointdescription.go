package shared

type AccessPointDescription struct {
	AccessPointArn *string             `json:"AccessPointArn"`
	AccessPointID  *string             `json:"AccessPointId"`
	ClientToken    *string             `json:"ClientToken"`
	FileSystemID   *string             `json:"FileSystemId"`
	LifeCycleState *LifeCycleStateEnum `json:"LifeCycleState"`
	Name           *string             `json:"Name"`
	OwnerID        *string             `json:"OwnerId"`
	PosixUser      *PosixUser          `json:"PosixUser"`
	RootDirectory  *RootDirectory      `json:"RootDirectory"`
	Tags           []Tag               `json:"Tags"`
}
