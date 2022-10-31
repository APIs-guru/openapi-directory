package shared




type GameServerInstanceStatusEnum string

const (
    GameServerInstanceStatusEnumActive GameServerInstanceStatusEnum = "ACTIVE"
GameServerInstanceStatusEnumDraining GameServerInstanceStatusEnum = "DRAINING"
GameServerInstanceStatusEnumSpotTerminating GameServerInstanceStatusEnum = "SPOT_TERMINATING"
)


