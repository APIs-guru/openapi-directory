package shared

type CreateSoftwareUpdateJobResponse struct {
	IotJobArn               *string `json:"IotJobArn"`
	IotJobID                *string `json:"IotJobId"`
	PlatformSoftwareVersion *string `json:"PlatformSoftwareVersion"`
}
