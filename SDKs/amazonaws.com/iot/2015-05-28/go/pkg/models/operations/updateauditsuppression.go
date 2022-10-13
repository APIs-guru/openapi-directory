package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UpdateAuditSuppressionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAuditSuppressionRequestBodyResourceIdentifier struct {
	Account                 *string                         `json:"account"`
	CaCertificateID         *string                         `json:"caCertificateId"`
	ClientID                *string                         `json:"clientId"`
	CognitoIdentityPoolID   *string                         `json:"cognitoIdentityPoolId"`
	DeviceCertificateID     *string                         `json:"deviceCertificateId"`
	IamRoleArn              *string                         `json:"iamRoleArn"`
	PolicyVersionIdentifier *shared.PolicyVersionIdentifier `json:"policyVersionIdentifier"`
	RoleAliasArn            *string                         `json:"roleAliasArn"`
}

type UpdateAuditSuppressionRequestBody struct {
	CheckName            string                                              `json:"checkName"`
	Description          *string                                             `json:"description"`
	ExpirationDate       *time.Time                                          `json:"expirationDate"`
	ResourceIdentifier   UpdateAuditSuppressionRequestBodyResourceIdentifier `json:"resourceIdentifier"`
	SuppressIndefinitely *bool                                               `json:"suppressIndefinitely"`
}

type UpdateAuditSuppressionRequest struct {
	Headers UpdateAuditSuppressionHeaders
	Request UpdateAuditSuppressionRequestBody `request:"mediaType=application/json"`
}

type UpdateAuditSuppressionResponse struct {
	ContentType                    string
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UpdateAuditSuppressionResponse map[string]interface{}
}
