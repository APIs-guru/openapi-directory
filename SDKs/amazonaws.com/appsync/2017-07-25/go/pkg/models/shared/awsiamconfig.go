package shared

type AwsIamConfig struct {
	SigningRegion      *string `json:"signingRegion"`
	SigningServiceName *string `json:"signingServiceName"`
}
