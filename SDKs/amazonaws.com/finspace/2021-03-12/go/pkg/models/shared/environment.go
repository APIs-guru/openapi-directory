package shared

type Environment struct {
	AwsAccountID              *string                `json:"awsAccountId,omitempty"`
	DedicatedServiceAccountID *string                `json:"dedicatedServiceAccountId,omitempty"`
	Description               *string                `json:"description,omitempty"`
	EnvironmentArn            *string                `json:"environmentArn,omitempty"`
	EnvironmentID             *string                `json:"environmentId,omitempty"`
	EnvironmentURL            *string                `json:"environmentUrl,omitempty"`
	FederationMode            *FederationModeEnum    `json:"federationMode,omitempty"`
	FederationParameters      *FederationParameters  `json:"federationParameters,omitempty"`
	KmsKeyID                  *string                `json:"kmsKeyId,omitempty"`
	Name                      *string                `json:"name,omitempty"`
	SageMakerStudioDomainURL  *string                `json:"sageMakerStudioDomainUrl,omitempty"`
	Status                    *EnvironmentStatusEnum `json:"status,omitempty"`
}
