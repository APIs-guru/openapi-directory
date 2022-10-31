package shared




type GameServerGroupStatusEnum string

const (
    GameServerGroupStatusEnumNew GameServerGroupStatusEnum = "NEW"
GameServerGroupStatusEnumActivating GameServerGroupStatusEnum = "ACTIVATING"
GameServerGroupStatusEnumActive GameServerGroupStatusEnum = "ACTIVE"
GameServerGroupStatusEnumDeleteScheduled GameServerGroupStatusEnum = "DELETE_SCHEDULED"
GameServerGroupStatusEnumDeleting GameServerGroupStatusEnum = "DELETING"
GameServerGroupStatusEnumDeleted GameServerGroupStatusEnum = "DELETED"
GameServerGroupStatusEnumError GameServerGroupStatusEnum = "ERROR"
)


