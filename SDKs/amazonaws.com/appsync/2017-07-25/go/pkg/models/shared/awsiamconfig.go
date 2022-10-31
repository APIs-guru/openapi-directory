package shared



type AwsIamConfig struct {
    SigningRegion *string `json:"signingRegion,omitempty"`
    SigningServiceName *string `json:"signingServiceName,omitempty"`
    
}

