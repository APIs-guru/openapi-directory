package shared




type InterconnectStateEnum string

const (
    InterconnectStateEnumRequested InterconnectStateEnum = "requested"
InterconnectStateEnumPending InterconnectStateEnum = "pending"
InterconnectStateEnumAvailable InterconnectStateEnum = "available"
InterconnectStateEnumDown InterconnectStateEnum = "down"
InterconnectStateEnumDeleting InterconnectStateEnum = "deleting"
InterconnectStateEnumDeleted InterconnectStateEnum = "deleted"
InterconnectStateEnumUnknown InterconnectStateEnum = "unknown"
)


