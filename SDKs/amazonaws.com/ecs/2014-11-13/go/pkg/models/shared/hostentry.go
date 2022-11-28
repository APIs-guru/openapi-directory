package shared

// HostEntry
// Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of a container via the <code>extraHosts</code> parameter of its <a>ContainerDefinition</a>.
type HostEntry struct {
	Hostname  string `json:"hostname"`
	IPAddress string `json:"ipAddress"`
}
