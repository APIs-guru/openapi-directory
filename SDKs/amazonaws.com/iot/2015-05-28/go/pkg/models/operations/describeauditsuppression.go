package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAuditSuppressionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeAuditSuppressionRequestBodyResourceIdentifier struct {
	Account                 *string                         `json:"account,omitempty"`
	CaCertificateID         *string                         `json:"caCertificateId,omitempty"`
	ClientID                *string                         `json:"clientId,omitempty"`
	CognitoIdentityPoolID   *string                         `json:"cognitoIdentityPoolId,omitempty"`
	DeviceCertificateID     *string                         `json:"deviceCertificateId,omitempty"`
	IamRoleArn              *string                         `json:"iamRoleArn,omitempty"`
	PolicyVersionIdentifier *shared.PolicyVersionIdentifier `json:"policyVersionIdentifier,omitempty"`
	RoleAliasArn            *string                         `json:"roleAliasArn,omitempty"`
}

type DescribeAuditSuppressionRequestBody struct {
	CheckName          string                                                `json:"checkName"`
	ResourceIdentifier DescribeAuditSuppressionRequestBodyResourceIdentifier `json:"resourceIdentifier"`
}

type DescribeAuditSuppressionRequest struct {
	Headers DescribeAuditSuppressionHeaders
	Request DescribeAuditSuppressionRequestBody `request:"mediaType=application/json"`
}

type DescribeAuditSuppressionResponse struct {
	ContentType                      string
	DescribeAuditSuppressionResponse *shared.DescribeAuditSuppressionResponse
	InternalFailureException         *interface{}
	InvalidRequestException          *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
}
