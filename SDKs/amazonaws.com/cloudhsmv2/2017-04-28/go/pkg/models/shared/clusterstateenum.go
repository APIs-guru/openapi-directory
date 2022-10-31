package shared




type ClusterStateEnum string

const (
    ClusterStateEnumCreateInProgress ClusterStateEnum = "CREATE_IN_PROGRESS"
ClusterStateEnumUninitialized ClusterStateEnum = "UNINITIALIZED"
ClusterStateEnumInitializeInProgress ClusterStateEnum = "INITIALIZE_IN_PROGRESS"
ClusterStateEnumInitialized ClusterStateEnum = "INITIALIZED"
ClusterStateEnumActive ClusterStateEnum = "ACTIVE"
ClusterStateEnumUpdateInProgress ClusterStateEnum = "UPDATE_IN_PROGRESS"
ClusterStateEnumDeleteInProgress ClusterStateEnum = "DELETE_IN_PROGRESS"
ClusterStateEnumDeleted ClusterStateEnum = "DELETED"
ClusterStateEnumDegraded ClusterStateEnum = "DEGRADED"
)


