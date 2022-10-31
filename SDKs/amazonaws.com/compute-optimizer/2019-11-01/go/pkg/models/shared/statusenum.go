package shared




type StatusEnum string

const (
    StatusEnumActive StatusEnum = "Active"
StatusEnumInactive StatusEnum = "Inactive"
StatusEnumPending StatusEnum = "Pending"
StatusEnumFailed StatusEnum = "Failed"
)


