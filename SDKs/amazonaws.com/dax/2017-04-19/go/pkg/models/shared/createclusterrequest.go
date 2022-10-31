package shared



type CreateClusterRequest struct {
    AvailabilityZones []string `json:"AvailabilityZones,omitempty"`
    ClusterEndpointEncryptionType *ClusterEndpointEncryptionTypeEnum `json:"ClusterEndpointEncryptionType,omitempty"`
    ClusterName string `json:"ClusterName"`
    Description *string `json:"Description,omitempty"`
    IamRoleArn string `json:"IamRoleArn"`
    NodeType string `json:"NodeType"`
    NotificationTopicArn *string `json:"NotificationTopicArn,omitempty"`
    ParameterGroupName *string `json:"ParameterGroupName,omitempty"`
    PreferredMaintenanceWindow *string `json:"PreferredMaintenanceWindow,omitempty"`
    ReplicationFactor int64 `json:"ReplicationFactor"`
    SseSpecification *SseSpecification `json:"SSESpecification,omitempty"`
    SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
    SubnetGroupName *string `json:"SubnetGroupName,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

