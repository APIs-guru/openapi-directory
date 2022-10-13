package shared

type CreateClusterRequest struct {
	AvailabilityZones             []string                           `json:"AvailabilityZones"`
	ClusterEndpointEncryptionType *ClusterEndpointEncryptionTypeEnum `json:"ClusterEndpointEncryptionType"`
	ClusterName                   string                             `json:"ClusterName"`
	Description                   *string                            `json:"Description"`
	IamRoleArn                    string                             `json:"IamRoleArn"`
	NodeType                      string                             `json:"NodeType"`
	NotificationTopicArn          *string                            `json:"NotificationTopicArn"`
	ParameterGroupName            *string                            `json:"ParameterGroupName"`
	PreferredMaintenanceWindow    *string                            `json:"PreferredMaintenanceWindow"`
	ReplicationFactor             int64                              `json:"ReplicationFactor"`
	SseSpecification              *SseSpecification                  `json:"SSESpecification"`
	SecurityGroupIds              []string                           `json:"SecurityGroupIds"`
	SubnetGroupName               *string                            `json:"SubnetGroupName"`
	Tags                          []Tag                              `json:"Tags"`
}
