package shared

// LoginAuthConfigReqObj
// The request object for this operation.
type LoginAuthConfigReqObj struct {
	AwsCognitoIdentityPoolID *string `json:"AwsCognitoIdentityPoolId,omitempty"`
	AwsCognitoRegion         *string `json:"AwsCognitoRegion,omitempty"`
	AwsUserPoolsID           *string `json:"AwsUserPoolsId,omitempty"`
	AwsUserPoolsWebClientID  *string `json:"AwsUserPoolsWebClientId,omitempty"`
}
