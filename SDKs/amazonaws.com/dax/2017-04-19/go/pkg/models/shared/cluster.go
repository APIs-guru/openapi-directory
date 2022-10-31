package shared



type Cluster struct {
    ActiveNodes *int64 `json:"ActiveNodes,omitempty"`
    ClusterArn *string `json:"ClusterArn,omitempty"`
    ClusterDiscoveryEndpoint *Endpoint `json:"ClusterDiscoveryEndpoint,omitempty"`
    ClusterEndpointEncryptionType *ClusterEndpointEncryptionTypeEnum `json:"ClusterEndpointEncryptionType,omitempty"`
    ClusterName *string `json:"ClusterName,omitempty"`
    Description *string `json:"Description,omitempty"`
    IamRoleArn *string `json:"IamRoleArn,omitempty"`
    NodeIdsToRemove []string `json:"NodeIdsToRemove,omitempty"`
    NodeType *string `json:"NodeType,omitempty"`
    Nodes []Node `json:"Nodes,omitempty"`
    NotificationConfiguration *NotificationConfiguration `json:"NotificationConfiguration,omitempty"`
    ParameterGroup *ParameterGroupStatus `json:"ParameterGroup,omitempty"`
    PreferredMaintenanceWindow *string `json:"PreferredMaintenanceWindow,omitempty"`
    SseDescription *SseDescription `json:"SSEDescription,omitempty"`
    SecurityGroups []SecurityGroupMembership `json:"SecurityGroups,omitempty"`
    Status *string `json:"Status,omitempty"`
    SubnetGroup *string `json:"SubnetGroup,omitempty"`
    TotalNodes *int64 `json:"TotalNodes,omitempty"`
    
}

