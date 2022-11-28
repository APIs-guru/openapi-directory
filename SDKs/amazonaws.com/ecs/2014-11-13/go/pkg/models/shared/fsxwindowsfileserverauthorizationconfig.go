package shared

// FSxWindowsFileServerAuthorizationConfig
// <p>The authorization configuration details for Amazon FSx for Windows File Server file system. See <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_FSxWindowsFileServerVolumeConfiguration.html">FSxWindowsFileServerVolumeConfiguration</a> in the <i>Amazon Elastic Container Service API Reference</i>.</p> <p>For more information and the input format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html">Amazon FSx for Windows File Server Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
type FSxWindowsFileServerAuthorizationConfig struct {
	CredentialsParameter string `json:"credentialsParameter"`
	Domain               string `json:"domain"`
}
