package shared



type Lag struct {
    AllowsHostedConnections *bool `json:"allowsHostedConnections,omitempty"`
    AwsDevice *string `json:"awsDevice,omitempty"`
    AwsDeviceV2 *string `json:"awsDeviceV2,omitempty"`
    AwsLogicalDeviceID *string `json:"awsLogicalDeviceId,omitempty"`
    Connections []Connection `json:"connections,omitempty"`
    ConnectionsBandwidth *string `json:"connectionsBandwidth,omitempty"`
    EncryptionMode *string `json:"encryptionMode,omitempty"`
    HasLogicalRedundancy *HasLogicalRedundancyEnum `json:"hasLogicalRedundancy,omitempty"`
    JumboFrameCapable *bool `json:"jumboFrameCapable,omitempty"`
    LagID *string `json:"lagId,omitempty"`
    LagName *string `json:"lagName,omitempty"`
    LagState *LagStateEnum `json:"lagState,omitempty"`
    Location *string `json:"location,omitempty"`
    MacSecCapable *bool `json:"macSecCapable,omitempty"`
    MacSecKeys []MacSecKey `json:"macSecKeys,omitempty"`
    MinimumLinks *int64 `json:"minimumLinks,omitempty"`
    NumberOfConnections *int64 `json:"numberOfConnections,omitempty"`
    OwnerAccount *string `json:"ownerAccount,omitempty"`
    ProviderName *string `json:"providerName,omitempty"`
    Region *string `json:"region,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

