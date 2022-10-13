package shared

type UnshareDirectoryRequest struct {
	DirectoryID   string        `json:"DirectoryId"`
	UnshareTarget UnshareTarget `json:"UnshareTarget"`
}
