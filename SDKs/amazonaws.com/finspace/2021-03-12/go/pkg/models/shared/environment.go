package shared

type Environment struct {
	AwsAccountID              *string                `json:"awsAccountId"`
	DedicatedServiceAccountID *string                `json:"dedicatedServiceAccountId"`
	Description               *string                `json:"description"`
	EnvironmentArn            *string                `json:"environmentArn"`
	EnvironmentID             *string                `json:"environmentId"`
	EnvironmentURL            *string                `json:"environmentUrl"`
	FederationMode            *FederationModeEnum    `json:"federationMode"`
	FederationParameters      *FederationParameters  `json:"federationParameters"`
	KmsKeyID                  *string                `json:"kmsKeyId"`
	Name                      *string                `json:"name"`
	SageMakerStudioDomainURL  *string                `json:"sageMakerStudioDomainUrl"`
	Status                    *EnvironmentStatusEnum `json:"status"`
}
