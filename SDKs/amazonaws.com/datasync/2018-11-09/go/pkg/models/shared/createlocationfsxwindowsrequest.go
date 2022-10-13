package shared

type CreateLocationFsxWindowsRequest struct {
	Domain            *string        `json:"Domain"`
	FsxFilesystemArn  string         `json:"FsxFilesystemArn"`
	Password          string         `json:"Password"`
	SecurityGroupArns []string       `json:"SecurityGroupArns"`
	Subdirectory      *string        `json:"Subdirectory"`
	Tags              []TagListEntry `json:"Tags"`
	User              string         `json:"User"`
}
