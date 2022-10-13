package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateAuditSuppressionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAuditSuppressionRequestBodyResourceIdentifier struct {
	Account                 *string                         `json:"account"`
	CaCertificateID         *string                         `json:"caCertificateId"`
	ClientID                *string                         `json:"clientId"`
	CognitoIdentityPoolID   *string                         `json:"cognitoIdentityPoolId"`
	DeviceCertificateID     *string                         `json:"deviceCertificateId"`
	IamRoleArn              *string                         `json:"iamRoleArn"`
	PolicyVersionIdentifier *shared.PolicyVersionIdentifier `json:"policyVersionIdentifier"`
	RoleAliasArn            *string                         `json:"roleAliasArn"`
}

type CreateAuditSuppressionRequestBody struct {
	CheckName            string                                              `json:"checkName"`
	ClientRequestToken   string                                              `json:"clientRequestToken"`
	Description          *string                                             `json:"description"`
	ExpirationDate       *time.Time                                          `json:"expirationDate"`
	ResourceIdentifier   CreateAuditSuppressionRequestBodyResourceIdentifier `json:"resourceIdentifier"`
	SuppressIndefinitely *bool                                               `json:"suppressIndefinitely"`
}

type CreateAuditSuppressionRequest struct {
	Headers CreateAuditSuppressionHeaders
	Request CreateAuditSuppressionRequestBody `request:"mediaType=application/json"`
}

type CreateAuditSuppressionResponse struct {
	ContentType                    string
	CreateAuditSuppressionResponse map[string]interface{}
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
