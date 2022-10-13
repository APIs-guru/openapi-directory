package shared

type InfrastructureConfiguration struct {
	Arn                        *string           `json:"arn"`
	DateCreated                *string           `json:"dateCreated"`
	DateUpdated                *string           `json:"dateUpdated"`
	Description                *string           `json:"description"`
	InstanceProfileName        *string           `json:"instanceProfileName"`
	InstanceTypes              []string          `json:"instanceTypes"`
	KeyPair                    *string           `json:"keyPair"`
	Logging                    *Logging          `json:"logging"`
	Name                       *string           `json:"name"`
	ResourceTags               map[string]string `json:"resourceTags"`
	SecurityGroupIds           []string          `json:"securityGroupIds"`
	SnsTopicArn                *string           `json:"snsTopicArn"`
	SubnetID                   *string           `json:"subnetId"`
	Tags                       map[string]string `json:"tags"`
	TerminateInstanceOnFailure *bool             `json:"terminateInstanceOnFailure"`
}
