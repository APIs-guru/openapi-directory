package shared

type CreateEnvironmentEc2Request struct {
	AutomaticStopTimeMinutes *int64              `json:"automaticStopTimeMinutes"`
	ClientRequestToken       *string             `json:"clientRequestToken"`
	ConnectionType           *ConnectionTypeEnum `json:"connectionType"`
	Description              *string             `json:"description"`
	DryRun                   *bool               `json:"dryRun"`
	ImageID                  *string             `json:"imageId"`
	InstanceType             string              `json:"instanceType"`
	Name                     string              `json:"name"`
	OwnerArn                 *string             `json:"ownerArn"`
	SubnetID                 *string             `json:"subnetId"`
	Tags                     []Tag               `json:"tags"`
}
