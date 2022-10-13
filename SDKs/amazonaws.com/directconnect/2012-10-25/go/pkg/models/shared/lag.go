package shared

type Lag struct {
	AllowsHostedConnections *bool                     `json:"allowsHostedConnections"`
	AwsDevice               *string                   `json:"awsDevice"`
	AwsDeviceV2             *string                   `json:"awsDeviceV2"`
	AwsLogicalDeviceID      *string                   `json:"awsLogicalDeviceId"`
	Connections             []Connection              `json:"connections"`
	ConnectionsBandwidth    *string                   `json:"connectionsBandwidth"`
	EncryptionMode          *string                   `json:"encryptionMode"`
	HasLogicalRedundancy    *HasLogicalRedundancyEnum `json:"hasLogicalRedundancy"`
	JumboFrameCapable       *bool                     `json:"jumboFrameCapable"`
	LagID                   *string                   `json:"lagId"`
	LagName                 *string                   `json:"lagName"`
	LagState                *LagStateEnum             `json:"lagState"`
	Location                *string                   `json:"location"`
	MacSecCapable           *bool                     `json:"macSecCapable"`
	MacSecKeys              []MacSecKey               `json:"macSecKeys"`
	MinimumLinks            *int64                    `json:"minimumLinks"`
	NumberOfConnections     *int64                    `json:"numberOfConnections"`
	OwnerAccount            *string                   `json:"ownerAccount"`
	ProviderName            *string                   `json:"providerName"`
	Region                  *string                   `json:"region"`
	Tags                    []Tag                     `json:"tags"`
}
