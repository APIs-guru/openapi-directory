package shared

// AwsCloudMapInstanceAttribute
// <p>An object that represents the Cloud Map attribute information for your virtual node.</p> <note> <p>AWS Cloud Map is not available in the eu-south-1 Region.</p> </note>
type AwsCloudMapInstanceAttribute struct {
	Key   string `json:"key"`
	Value string `json:"value"`
}
