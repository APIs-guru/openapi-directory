package shared




type ConnectionStateEnum string

const (
    ConnectionStateEnumCreating ConnectionStateEnum = "CREATING"
ConnectionStateEnumUpdating ConnectionStateEnum = "UPDATING"
ConnectionStateEnumDeleting ConnectionStateEnum = "DELETING"
ConnectionStateEnumAuthorized ConnectionStateEnum = "AUTHORIZED"
ConnectionStateEnumDeauthorized ConnectionStateEnum = "DEAUTHORIZED"
ConnectionStateEnumAuthorizing ConnectionStateEnum = "AUTHORIZING"
ConnectionStateEnumDeauthorizing ConnectionStateEnum = "DEAUTHORIZING"
)


