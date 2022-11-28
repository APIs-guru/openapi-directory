package shared

// CreateMicrosoftAdRequest
// Creates an Managed Microsoft AD directory.
type CreateMicrosoftAdRequest struct {
	Description *string               `json:"Description,omitempty"`
	Edition     *DirectoryEditionEnum `json:"Edition,omitempty"`
	Name        string                `json:"Name"`
	Password    string                `json:"Password"`
	ShortName   *string               `json:"ShortName,omitempty"`
	Tags        []Tag                 `json:"Tags,omitempty"`
	VpcSettings DirectoryVpcSettings  `json:"VpcSettings"`
}
