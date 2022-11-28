package shared

// DomainDescriptionType
// A container for information about a domain.
type DomainDescriptionType struct {
	AwsAccountID           *string                 `json:"AWSAccountId,omitempty"`
	CloudFrontDistribution *string                 `json:"CloudFrontDistribution,omitempty"`
	CustomDomainConfig     *CustomDomainConfigType `json:"CustomDomainConfig,omitempty"`
	Domain                 *string                 `json:"Domain,omitempty"`
	S3Bucket               *string                 `json:"S3Bucket,omitempty"`
	Status                 *DomainStatusTypeEnum   `json:"Status,omitempty"`
	UserPoolID             *string                 `json:"UserPoolId,omitempty"`
	Version                *string                 `json:"Version,omitempty"`
}
