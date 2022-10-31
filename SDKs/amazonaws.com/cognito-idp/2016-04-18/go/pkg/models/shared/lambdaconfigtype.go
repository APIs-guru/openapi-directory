package shared



type LambdaConfigType struct {
    CreateAuthChallenge *string `json:"CreateAuthChallenge,omitempty"`
    CustomEmailSender *CustomEmailLambdaVersionConfigType `json:"CustomEmailSender,omitempty"`
    CustomMessage *string `json:"CustomMessage,omitempty"`
    CustomSmsSender *CustomSmsLambdaVersionConfigType `json:"CustomSMSSender,omitempty"`
    DefineAuthChallenge *string `json:"DefineAuthChallenge,omitempty"`
    KmsKeyID *string `json:"KMSKeyID,omitempty"`
    PostAuthentication *string `json:"PostAuthentication,omitempty"`
    PostConfirmation *string `json:"PostConfirmation,omitempty"`
    PreAuthentication *string `json:"PreAuthentication,omitempty"`
    PreSignUp *string `json:"PreSignUp,omitempty"`
    PreTokenGeneration *string `json:"PreTokenGeneration,omitempty"`
    UserMigration *string `json:"UserMigration,omitempty"`
    VerifyAuthChallengeResponse *string `json:"VerifyAuthChallengeResponse,omitempty"`
    
}

