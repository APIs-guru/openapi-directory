package shared

type ResourceIdentifier struct {
	Account                 *string                  `json:"account"`
	CaCertificateID         *string                  `json:"caCertificateId"`
	ClientID                *string                  `json:"clientId"`
	CognitoIdentityPoolID   *string                  `json:"cognitoIdentityPoolId"`
	DeviceCertificateID     *string                  `json:"deviceCertificateId"`
	IamRoleArn              *string                  `json:"iamRoleArn"`
	PolicyVersionIdentifier *PolicyVersionIdentifier `json:"policyVersionIdentifier"`
	RoleAliasArn            *string                  `json:"roleAliasArn"`
}
