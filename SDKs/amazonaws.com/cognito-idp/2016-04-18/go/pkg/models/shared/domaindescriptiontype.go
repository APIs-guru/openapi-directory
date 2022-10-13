package shared

type DomainDescriptionType struct {
	AwsAccountID           *string                 `json:"AWSAccountId"`
	CloudFrontDistribution *string                 `json:"CloudFrontDistribution"`
	CustomDomainConfig     *CustomDomainConfigType `json:"CustomDomainConfig"`
	Domain                 *string                 `json:"Domain"`
	S3Bucket               *string                 `json:"S3Bucket"`
	Status                 *DomainStatusTypeEnum   `json:"Status"`
	UserPoolID             *string                 `json:"UserPoolId"`
	Version                *string                 `json:"Version"`
}
