package shared

type CreateDevEndpointRequest struct {
	Arguments             map[string]string `json:"Arguments"`
	EndpointName          string            `json:"EndpointName"`
	ExtraJarsS3Path       *string           `json:"ExtraJarsS3Path"`
	ExtraPythonLibsS3Path *string           `json:"ExtraPythonLibsS3Path"`
	GlueVersion           *string           `json:"GlueVersion"`
	NumberOfNodes         *int64            `json:"NumberOfNodes"`
	NumberOfWorkers       *int64            `json:"NumberOfWorkers"`
	PublicKey             *string           `json:"PublicKey"`
	PublicKeys            []string          `json:"PublicKeys"`
	RoleArn               string            `json:"RoleArn"`
	SecurityConfiguration *string           `json:"SecurityConfiguration"`
	SecurityGroupIds      []string          `json:"SecurityGroupIds"`
	SubnetID              *string           `json:"SubnetId"`
	Tags                  map[string]string `json:"Tags"`
	WorkerType            *WorkerTypeEnum   `json:"WorkerType"`
}
