package shared

type DescribeReplicationSubnetGroupsResponse struct {
	Marker                  *string                  `json:"Marker"`
	ReplicationSubnetGroups []ReplicationSubnetGroup `json:"ReplicationSubnetGroups"`
}
