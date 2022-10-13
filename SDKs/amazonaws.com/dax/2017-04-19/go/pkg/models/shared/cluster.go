package shared

type Cluster struct {
	ActiveNodes                   *int64                             `json:"ActiveNodes"`
	ClusterArn                    *string                            `json:"ClusterArn"`
	ClusterDiscoveryEndpoint      *Endpoint                          `json:"ClusterDiscoveryEndpoint"`
	ClusterEndpointEncryptionType *ClusterEndpointEncryptionTypeEnum `json:"ClusterEndpointEncryptionType"`
	ClusterName                   *string                            `json:"ClusterName"`
	Description                   *string                            `json:"Description"`
	IamRoleArn                    *string                            `json:"IamRoleArn"`
	NodeIdsToRemove               []string                           `json:"NodeIdsToRemove"`
	NodeType                      *string                            `json:"NodeType"`
	Nodes                         []Node                             `json:"Nodes"`
	NotificationConfiguration     *NotificationConfiguration         `json:"NotificationConfiguration"`
	ParameterGroup                *ParameterGroupStatus              `json:"ParameterGroup"`
	PreferredMaintenanceWindow    *string                            `json:"PreferredMaintenanceWindow"`
	SseDescription                *SseDescription                    `json:"SSEDescription"`
	SecurityGroups                []SecurityGroupMembership          `json:"SecurityGroups"`
	Status                        *string                            `json:"Status"`
	SubnetGroup                   *string                            `json:"SubnetGroup"`
	TotalNodes                    *int64                             `json:"TotalNodes"`
}
