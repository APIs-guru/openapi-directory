package shared



type DescribeReplicationSubnetGroupsResponse struct {
    Marker *string `json:"Marker,omitempty"`
    ReplicationSubnetGroups []ReplicationSubnetGroup `json:"ReplicationSubnetGroups,omitempty"`
    
}

