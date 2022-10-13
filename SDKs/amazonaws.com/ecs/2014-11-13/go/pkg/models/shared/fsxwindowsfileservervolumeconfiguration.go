package shared

type FSxWindowsFileServerVolumeConfiguration struct {
	AuthorizationConfig FSxWindowsFileServerAuthorizationConfig `json:"authorizationConfig"`
	FileSystemID        string                                  `json:"fileSystemId"`
	RootDirectory       string                                  `json:"rootDirectory"`
}
