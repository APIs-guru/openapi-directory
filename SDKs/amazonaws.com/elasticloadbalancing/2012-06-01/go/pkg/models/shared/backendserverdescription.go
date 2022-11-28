package shared

// BackendServerDescription
// Information about the configuration of an EC2 instance.
type BackendServerDescription struct {
	InstancePort *int64
	PolicyNames  []string
}
