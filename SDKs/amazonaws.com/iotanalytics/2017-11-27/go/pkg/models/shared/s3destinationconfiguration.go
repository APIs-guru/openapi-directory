package shared

type S3DestinationConfiguration struct {
	Bucket            string             `json:"bucket"`
	GlueConfiguration *GlueConfiguration `json:"glueConfiguration"`
	Key               string             `json:"key"`
	RoleArn           string             `json:"roleArn"`
}
