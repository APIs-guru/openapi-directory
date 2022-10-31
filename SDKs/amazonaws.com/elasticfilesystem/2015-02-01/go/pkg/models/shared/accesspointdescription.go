package shared



type AccessPointDescription struct {
    AccessPointArn *string `json:"AccessPointArn,omitempty"`
    AccessPointID *string `json:"AccessPointId,omitempty"`
    ClientToken *string `json:"ClientToken,omitempty"`
    FileSystemID *string `json:"FileSystemId,omitempty"`
    LifeCycleState *LifeCycleStateEnum `json:"LifeCycleState,omitempty"`
    Name *string `json:"Name,omitempty"`
    OwnerID *string `json:"OwnerId,omitempty"`
    PosixUser *PosixUser `json:"PosixUser,omitempty"`
    RootDirectory *RootDirectory `json:"RootDirectory,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

