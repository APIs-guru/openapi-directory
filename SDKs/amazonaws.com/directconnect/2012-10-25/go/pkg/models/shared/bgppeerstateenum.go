package shared




type BgpPeerStateEnum string

const (
    BgpPeerStateEnumVerifying BgpPeerStateEnum = "verifying"
BgpPeerStateEnumPending BgpPeerStateEnum = "pending"
BgpPeerStateEnumAvailable BgpPeerStateEnum = "available"
BgpPeerStateEnumDeleting BgpPeerStateEnum = "deleting"
BgpPeerStateEnumDeleted BgpPeerStateEnum = "deleted"
)


