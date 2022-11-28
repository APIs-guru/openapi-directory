package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UpdateAuditSuppressionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateAuditSuppressionRequestBodyResourceIdentifier
// Information that identifies the noncompliant resource.
type UpdateAuditSuppressionRequestBodyResourceIdentifier struct {
	Account                 *string                         `json:"account,omitempty"`
	CaCertificateID         *string                         `json:"caCertificateId,omitempty"`
	ClientID                *string                         `json:"clientId,omitempty"`
	CognitoIdentityPoolID   *string                         `json:"cognitoIdentityPoolId,omitempty"`
	DeviceCertificateID     *string                         `json:"deviceCertificateId,omitempty"`
	IamRoleArn              *string                         `json:"iamRoleArn,omitempty"`
	PolicyVersionIdentifier *shared.PolicyVersionIdentifier `json:"policyVersionIdentifier,omitempty"`
	RoleAliasArn            *string                         `json:"roleAliasArn,omitempty"`
}

type UpdateAuditSuppressionRequestBody struct {
	CheckName            string                                              `json:"checkName"`
	Description          *string                                             `json:"description,omitempty"`
	ExpirationDate       *time.Time                                          `json:"expirationDate,omitempty"`
	ResourceIdentifier   UpdateAuditSuppressionRequestBodyResourceIdentifier `json:"resourceIdentifier"`
	SuppressIndefinitely *bool                                               `json:"suppressIndefinitely,omitempty"`
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
