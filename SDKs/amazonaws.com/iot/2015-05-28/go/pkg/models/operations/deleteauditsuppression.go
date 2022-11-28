package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAuditSuppressionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// DeleteAuditSuppressionRequestBodyResourceIdentifier
// Information that identifies the noncompliant resource.
type DeleteAuditSuppressionRequestBodyResourceIdentifier struct {
	Account                 *string                         `json:"account,omitempty"`
	CaCertificateID         *string                         `json:"caCertificateId,omitempty"`
	ClientID                *string                         `json:"clientId,omitempty"`
	CognitoIdentityPoolID   *string                         `json:"cognitoIdentityPoolId,omitempty"`
	DeviceCertificateID     *string                         `json:"deviceCertificateId,omitempty"`
	IamRoleArn              *string                         `json:"iamRoleArn,omitempty"`
	PolicyVersionIdentifier *shared.PolicyVersionIdentifier `json:"policyVersionIdentifier,omitempty"`
	RoleAliasArn            *string                         `json:"roleAliasArn,omitempty"`
}

type DeleteAuditSuppressionRequestBody struct {
	CheckName          string                                              `json:"checkName"`
	ResourceIdentifier DeleteAuditSuppressionRequestBodyResourceIdentifier `json:"resourceIdentifier"`
}

type DeleteAuditSuppressionRequest struct {
	Headers DeleteAuditSuppressionHeaders
	Request DeleteAuditSuppressionRequestBody `request:"mediaType=application/json"`
}

type DeleteAuditSuppressionResponse struct {
	ContentType                    string
	DeleteAuditSuppressionResponse map[string]interface{}
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
