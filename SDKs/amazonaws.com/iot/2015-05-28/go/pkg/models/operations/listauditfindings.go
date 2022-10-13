package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListAuditFindingsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAuditFindingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListAuditFindingsRequestBodyResourceIdentifier struct {
	Account                 *string                         `json:"account"`
	CaCertificateID         *string                         `json:"caCertificateId"`
	ClientID                *string                         `json:"clientId"`
	CognitoIdentityPoolID   *string                         `json:"cognitoIdentityPoolId"`
	DeviceCertificateID     *string                         `json:"deviceCertificateId"`
	IamRoleArn              *string                         `json:"iamRoleArn"`
	PolicyVersionIdentifier *shared.PolicyVersionIdentifier `json:"policyVersionIdentifier"`
	RoleAliasArn            *string                         `json:"roleAliasArn"`
}

type ListAuditFindingsRequestBody struct {
	CheckName              *string                                         `json:"checkName"`
	EndTime                *time.Time                                      `json:"endTime"`
	ListSuppressedFindings *bool                                           `json:"listSuppressedFindings"`
	MaxResults             *int64                                          `json:"maxResults"`
	NextToken              *string                                         `json:"nextToken"`
	ResourceIdentifier     *ListAuditFindingsRequestBodyResourceIdentifier `json:"resourceIdentifier"`
	StartTime              *time.Time                                      `json:"startTime"`
	TaskID                 *string                                         `json:"taskId"`
}

type ListAuditFindingsRequest struct {
	QueryParams ListAuditFindingsQueryParams
	Headers     ListAuditFindingsHeaders
	Request     ListAuditFindingsRequestBody `request:"mediaType=application/json"`
}

type ListAuditFindingsResponse struct {
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ListAuditFindingsResponse *shared.ListAuditFindingsResponse
	StatusCode                int64
	ThrottlingException       *interface{}
}
