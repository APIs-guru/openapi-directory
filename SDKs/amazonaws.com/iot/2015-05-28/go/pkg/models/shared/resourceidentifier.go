package shared



type ResourceIdentifier struct {
    Account *string `json:"account,omitempty"`
    CaCertificateID *string `json:"caCertificateId,omitempty"`
    ClientID *string `json:"clientId,omitempty"`
    CognitoIdentityPoolID *string `json:"cognitoIdentityPoolId,omitempty"`
    DeviceCertificateID *string `json:"deviceCertificateId,omitempty"`
    IamRoleArn *string `json:"iamRoleArn,omitempty"`
    PolicyVersionIdentifier *PolicyVersionIdentifier `json:"policyVersionIdentifier,omitempty"`
    RoleAliasArn *string `json:"roleAliasArn,omitempty"`
    
}

