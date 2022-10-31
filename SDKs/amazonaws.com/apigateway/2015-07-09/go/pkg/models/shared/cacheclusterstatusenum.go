package shared




type CacheClusterStatusEnum string

const (
    CacheClusterStatusEnumCreateInProgress CacheClusterStatusEnum = "CREATE_IN_PROGRESS"
CacheClusterStatusEnumAvailable CacheClusterStatusEnum = "AVAILABLE"
CacheClusterStatusEnumDeleteInProgress CacheClusterStatusEnum = "DELETE_IN_PROGRESS"
CacheClusterStatusEnumNotAvailable CacheClusterStatusEnum = "NOT_AVAILABLE"
CacheClusterStatusEnumFlushInProgress CacheClusterStatusEnum = "FLUSH_IN_PROGRESS"
)


