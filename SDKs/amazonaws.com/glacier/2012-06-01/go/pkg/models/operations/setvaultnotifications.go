package operations

type SetVaultNotificationsPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
}

type SetVaultNotificationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SetVaultNotificationsRequestBodyVaultNotificationConfig struct {
	Events   []string `json:"Events"`
	SnsTopic *string  `json:"SNSTopic"`
}

type SetVaultNotificationsRequestBody struct {
	VaultNotificationConfig *SetVaultNotificationsRequestBodyVaultNotificationConfig `json:"vaultNotificationConfig"`
}

type SetVaultNotificationsRequest struct {
	PathParams SetVaultNotificationsPathParams
	Headers    SetVaultNotificationsHeaders
	Request    SetVaultNotificationsRequestBody `request:"mediaType=application/json"`
}

type SetVaultNotificationsResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	MissingParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
