package shared

// GlobalReplicationGroup
// <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>
type GlobalReplicationGroup struct {
	Arn                               *string
	AtRestEncryptionEnabled           *bool
	AuthTokenEnabled                  *bool
	CacheNodeType                     *string
	ClusterEnabled                    *bool
	Engine                            *string
	EngineVersion                     *string
	GlobalNodeGroups                  []GlobalNodeGroup
	GlobalReplicationGroupDescription *string
	GlobalReplicationGroupID          *string
	Members                           []GlobalReplicationGroupMember
	Status                            *string
	TransitEncryptionEnabled          *bool
}
