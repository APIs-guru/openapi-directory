package shared

type SourceTypeEnum string

const (
	SourceTypeEnumCacheCluster        SourceTypeEnum = "cache-cluster"
	SourceTypeEnumCacheParameterGroup SourceTypeEnum = "cache-parameter-group"
	SourceTypeEnumCacheSecurityGroup  SourceTypeEnum = "cache-security-group"
	SourceTypeEnumCacheSubnetGroup    SourceTypeEnum = "cache-subnet-group"
	SourceTypeEnumReplicationGroup    SourceTypeEnum = "replication-group"
	SourceTypeEnumUser                SourceTypeEnum = "user"
	SourceTypeEnumUserGroup           SourceTypeEnum = "user-group"
)
