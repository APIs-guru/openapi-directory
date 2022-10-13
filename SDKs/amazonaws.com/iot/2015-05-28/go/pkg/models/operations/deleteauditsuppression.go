package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAuditSuppressionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteAuditSuppressionRequestBodyResourceIdentifier struct {
	Account                 *string                         `json:"account"`
	CaCertificateID         *string                         `json:"caCertificateId"`
	ClientID                *string                         `json:"clientId"`
	CognitoIdentityPoolID   *string                         `json:"cognitoIdentityPoolId"`
	DeviceCertificateID     *string                         `json:"deviceCertificateId"`
	IamRoleArn              *string                         `json:"iamRoleArn"`
	PolicyVersionIdentifier *shared.PolicyVersionIdentifier `json:"policyVersionIdentifier"`
	RoleAliasArn            *string                         `json:"roleAliasArn"`
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
