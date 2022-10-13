package operations

import (
	"openapi/pkg/models/shared"
)

type ListAuditSuppressionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAuditSuppressionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListAuditSuppressionsRequestBodyResourceIdentifier struct {
	Account                 *string                         `json:"account"`
	CaCertificateID         *string                         `json:"caCertificateId"`
	ClientID                *string                         `json:"clientId"`
	CognitoIdentityPoolID   *string                         `json:"cognitoIdentityPoolId"`
	DeviceCertificateID     *string                         `json:"deviceCertificateId"`
	IamRoleArn              *string                         `json:"iamRoleArn"`
	PolicyVersionIdentifier *shared.PolicyVersionIdentifier `json:"policyVersionIdentifier"`
	RoleAliasArn            *string                         `json:"roleAliasArn"`
}

type ListAuditSuppressionsRequestBody struct {
	AscendingOrder     *bool                                               `json:"ascendingOrder"`
	CheckName          *string                                             `json:"checkName"`
	MaxResults         *int64                                              `json:"maxResults"`
	NextToken          *string                                             `json:"nextToken"`
	ResourceIdentifier *ListAuditSuppressionsRequestBodyResourceIdentifier `json:"resourceIdentifier"`
}

type ListAuditSuppressionsRequest struct {
	QueryParams ListAuditSuppressionsQueryParams
	Headers     ListAuditSuppressionsHeaders
	Request     ListAuditSuppressionsRequestBody `request:"mediaType=application/json"`
}

type ListAuditSuppressionsResponse struct {
	ContentType                   string
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	ListAuditSuppressionsResponse *shared.ListAuditSuppressionsResponse
	StatusCode                    int64
	ThrottlingException           *interface{}
}
