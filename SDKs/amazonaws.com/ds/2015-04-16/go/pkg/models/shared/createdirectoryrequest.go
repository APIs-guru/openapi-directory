package shared

// CreateDirectoryRequest
// Contains the inputs for the <a>CreateDirectory</a> operation.
type CreateDirectoryRequest struct {
	Description *string               `json:"Description,omitempty"`
	Name        string                `json:"Name"`
	Password    string                `json:"Password"`
	ShortName   *string               `json:"ShortName,omitempty"`
	Size        DirectorySizeEnum     `json:"Size"`
	Tags        []Tag                 `json:"Tags,omitempty"`
	VpcSettings *DirectoryVpcSettings `json:"VpcSettings,omitempty"`
}
