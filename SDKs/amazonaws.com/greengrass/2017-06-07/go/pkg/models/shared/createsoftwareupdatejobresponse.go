package shared

type CreateSoftwareUpdateJobResponse struct {
	IotJobArn               *string `json:"IotJobArn,omitempty"`
	IotJobID                *string `json:"IotJobId,omitempty"`
	PlatformSoftwareVersion *string `json:"PlatformSoftwareVersion,omitempty"`
}
