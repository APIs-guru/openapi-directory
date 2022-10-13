package shared

type CreateBuildInput struct {
	Name            *string              `json:"Name"`
	OperatingSystem *OperatingSystemEnum `json:"OperatingSystem"`
	StorageLocation *S3Location          `json:"StorageLocation"`
	Tags            []Tag                `json:"Tags"`
	Version         *string              `json:"Version"`
}
