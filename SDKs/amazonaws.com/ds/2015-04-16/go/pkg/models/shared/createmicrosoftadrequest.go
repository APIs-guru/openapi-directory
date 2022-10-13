package shared

type CreateMicrosoftAdRequest struct {
	Description *string               `json:"Description"`
	Edition     *DirectoryEditionEnum `json:"Edition"`
	Name        string                `json:"Name"`
	Password    string                `json:"Password"`
	ShortName   *string               `json:"ShortName"`
	Tags        []Tag                 `json:"Tags"`
	VpcSettings DirectoryVpcSettings  `json:"VpcSettings"`
}
