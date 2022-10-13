package shared

type LambdaConfigType struct {
	CreateAuthChallenge         *string                             `json:"CreateAuthChallenge"`
	CustomEmailSender           *CustomEmailLambdaVersionConfigType `json:"CustomEmailSender"`
	CustomMessage               *string                             `json:"CustomMessage"`
	CustomSmsSender             *CustomSmsLambdaVersionConfigType   `json:"CustomSMSSender"`
	DefineAuthChallenge         *string                             `json:"DefineAuthChallenge"`
	KmsKeyID                    *string                             `json:"KMSKeyID"`
	PostAuthentication          *string                             `json:"PostAuthentication"`
	PostConfirmation            *string                             `json:"PostConfirmation"`
	PreAuthentication           *string                             `json:"PreAuthentication"`
	PreSignUp                   *string                             `json:"PreSignUp"`
	PreTokenGeneration          *string                             `json:"PreTokenGeneration"`
	UserMigration               *string                             `json:"UserMigration"`
	VerifyAuthChallengeResponse *string                             `json:"VerifyAuthChallengeResponse"`
}
