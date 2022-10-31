package shared

type CreateEnvironmentEc2Request struct {
	AutomaticStopTimeMinutes *int64              `json:"automaticStopTimeMinutes,omitempty"`
	ClientRequestToken       *string             `json:"clientRequestToken,omitempty"`
	ConnectionType           *ConnectionTypeEnum `json:"connectionType,omitempty"`
	Description              *string             `json:"description,omitempty"`
	DryRun                   *bool               `json:"dryRun,omitempty"`
	ImageID                  *string             `json:"imageId,omitempty"`
	InstanceType             string              `json:"instanceType"`
	Name                     string              `json:"name"`
	OwnerArn                 *string             `json:"ownerArn,omitempty"`
	SubnetID                 *string             `json:"subnetId,omitempty"`
	Tags                     []Tag               `json:"tags,omitempty"`
}
