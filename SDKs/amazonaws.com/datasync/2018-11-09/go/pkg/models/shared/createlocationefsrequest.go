package shared

// CreateLocationEfsRequest
// CreateLocationEfsRequest
type CreateLocationEfsRequest struct {
	Ec2Config        Ec2Config      `json:"Ec2Config"`
	EfsFilesystemArn string         `json:"EfsFilesystemArn"`
	Subdirectory     *string        `json:"Subdirectory,omitempty"`
	Tags             []TagListEntry `json:"Tags,omitempty"`
}
