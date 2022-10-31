package shared



type InfrastructureConfiguration struct {
    Arn *string `json:"arn,omitempty"`
    DateCreated *string `json:"dateCreated,omitempty"`
    DateUpdated *string `json:"dateUpdated,omitempty"`
    Description *string `json:"description,omitempty"`
    InstanceProfileName *string `json:"instanceProfileName,omitempty"`
    InstanceTypes []string `json:"instanceTypes,omitempty"`
    KeyPair *string `json:"keyPair,omitempty"`
    Logging *Logging `json:"logging,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceTags map[string]string `json:"resourceTags,omitempty"`
    SecurityGroupIds []string `json:"securityGroupIds,omitempty"`
    SnsTopicArn *string `json:"snsTopicArn,omitempty"`
    SubnetID *string `json:"subnetId,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    TerminateInstanceOnFailure *bool `json:"terminateInstanceOnFailure,omitempty"`
    
}

