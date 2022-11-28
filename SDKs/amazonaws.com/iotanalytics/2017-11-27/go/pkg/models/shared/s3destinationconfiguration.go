package shared

// S3DestinationConfiguration
// Configuration information for delivery of dataset contents to Amazon Simple Storage Service (Amazon S3).
type S3DestinationConfiguration struct {
	Bucket            string             `json:"bucket"`
	GlueConfiguration *GlueConfiguration `json:"glueConfiguration,omitempty"`
	Key               string             `json:"key"`
	RoleArn           string             `json:"roleArn"`
}
