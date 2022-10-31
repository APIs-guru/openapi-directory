package shared

type CreateDevEndpointRequest struct {
	Arguments             map[string]string `json:"Arguments,omitempty"`
	EndpointName          string            `json:"EndpointName"`
	ExtraJarsS3Path       *string           `json:"ExtraJarsS3Path,omitempty"`
	ExtraPythonLibsS3Path *string           `json:"ExtraPythonLibsS3Path,omitempty"`
	GlueVersion           *string           `json:"GlueVersion,omitempty"`
	NumberOfNodes         *int64            `json:"NumberOfNodes,omitempty"`
	NumberOfWorkers       *int64            `json:"NumberOfWorkers,omitempty"`
	PublicKey             *string           `json:"PublicKey,omitempty"`
	PublicKeys            []string          `json:"PublicKeys,omitempty"`
	RoleArn               string            `json:"RoleArn"`
	SecurityConfiguration *string           `json:"SecurityConfiguration,omitempty"`
	SecurityGroupIds      []string          `json:"SecurityGroupIds,omitempty"`
	SubnetID              *string           `json:"SubnetId,omitempty"`
	Tags                  map[string]string `json:"Tags,omitempty"`
	WorkerType            *WorkerTypeEnum   `json:"WorkerType,omitempty"`
}
