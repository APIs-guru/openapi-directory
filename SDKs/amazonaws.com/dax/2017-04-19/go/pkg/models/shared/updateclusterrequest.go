package shared

type UpdateClusterRequest struct {
	ClusterName                string   `json:"ClusterName"`
	Description                *string  `json:"Description,omitempty"`
	NotificationTopicArn       *string  `json:"NotificationTopicArn,omitempty"`
	NotificationTopicStatus    *string  `json:"NotificationTopicStatus,omitempty"`
	ParameterGroupName         *string  `json:"ParameterGroupName,omitempty"`
	PreferredMaintenanceWindow *string  `json:"PreferredMaintenanceWindow,omitempty"`
	SecurityGroupIds           []string `json:"SecurityGroupIds,omitempty"`
}
