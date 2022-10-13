package shared

type UpdateClusterRequest struct {
	ClusterName                string   `json:"ClusterName"`
	Description                *string  `json:"Description"`
	NotificationTopicArn       *string  `json:"NotificationTopicArn"`
	NotificationTopicStatus    *string  `json:"NotificationTopicStatus"`
	ParameterGroupName         *string  `json:"ParameterGroupName"`
	PreferredMaintenanceWindow *string  `json:"PreferredMaintenanceWindow"`
	SecurityGroupIds           []string `json:"SecurityGroupIds"`
}
