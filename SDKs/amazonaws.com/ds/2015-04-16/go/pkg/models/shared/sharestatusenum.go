package shared




type ShareStatusEnum string

const (
    ShareStatusEnumShared ShareStatusEnum = "Shared"
ShareStatusEnumPendingAcceptance ShareStatusEnum = "PendingAcceptance"
ShareStatusEnumRejected ShareStatusEnum = "Rejected"
ShareStatusEnumRejecting ShareStatusEnum = "Rejecting"
ShareStatusEnumRejectFailed ShareStatusEnum = "RejectFailed"
ShareStatusEnumSharing ShareStatusEnum = "Sharing"
ShareStatusEnumShareFailed ShareStatusEnum = "ShareFailed"
ShareStatusEnumDeleted ShareStatusEnum = "Deleted"
ShareStatusEnumDeleting ShareStatusEnum = "Deleting"
)


