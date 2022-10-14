package shared

type S3DestinationConfiguration struct {
	Bucket            string             `json:"bucket"`
	GlueConfiguration *GlueConfiguration `json:"glueConfiguration,omitempty"`
	Key               string             `json:"key"`
	RoleArn           string             `json:"roleArn"`
}
