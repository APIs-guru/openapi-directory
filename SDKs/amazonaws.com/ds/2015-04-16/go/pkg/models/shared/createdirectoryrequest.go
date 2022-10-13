package shared

type CreateDirectoryRequest struct {
	Description *string               `json:"Description"`
	Name        string                `json:"Name"`
	Password    string                `json:"Password"`
	ShortName   *string               `json:"ShortName"`
	Size        DirectorySizeEnum     `json:"Size"`
	Tags        []Tag                 `json:"Tags"`
	VpcSettings *DirectoryVpcSettings `json:"VpcSettings"`
}
