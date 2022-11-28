package shared

// Action
// <p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p>
type Action struct {
	AuthenticateCognitoConfig *AuthenticateCognitoActionConfig
	AuthenticateOidcConfig    *AuthenticateOidcActionConfig
	FixedResponseConfig       *FixedResponseActionConfig
	ForwardConfig             *ForwardActionConfig
	Order                     *int64
	RedirectConfig            *RedirectActionConfig
	TargetGroupArn            *string
	Type                      ActionTypeEnumEnum
}
