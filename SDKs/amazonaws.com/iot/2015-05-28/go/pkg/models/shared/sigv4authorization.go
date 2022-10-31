package shared



type SigV4Authorization struct {
    RoleArn string `json:"roleArn"`
    ServiceName string `json:"serviceName"`
    SigningRegion string `json:"signingRegion"`
    
}

