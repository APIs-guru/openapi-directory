package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAuditSuppressionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// DescribeAuditSuppressionRequestBodyResourceIdentifier
// Information that identifies the noncompliant resource.
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
