package operations

import (
"openapi/pkg/models/shared")

type ListAuditSuppressionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListAuditSuppressionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListAuditSuppressionsRequestBodyResourceIdentifier struct {
    Account *string `json:"account,omitempty"`
    CaCertificateID *string `json:"caCertificateId,omitempty"`
    ClientID *string `json:"clientId,omitempty"`
    CognitoIdentityPoolID *string `json:"cognitoIdentityPoolId,omitempty"`
    DeviceCertificateID *string `json:"deviceCertificateId,omitempty"`
    IamRoleArn *string `json:"iamRoleArn,omitempty"`
    PolicyVersionIdentifier *shared.PolicyVersionIdentifier `json:"policyVersionIdentifier,omitempty"`
    RoleAliasArn *string `json:"roleAliasArn,omitempty"`
    
}

type ListAuditSuppressionsRequestBody struct {
    AscendingOrder *bool `json:"ascendingOrder,omitempty"`
    CheckName *string `json:"checkName,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    ResourceIdentifier *ListAuditSuppressionsRequestBodyResourceIdentifier `json:"resourceIdentifier,omitempty"`
    
}

type ListAuditSuppressionsRequest struct {
    QueryParams ListAuditSuppressionsQueryParams 
    Headers ListAuditSuppressionsHeaders 
    Request ListAuditSuppressionsRequestBody `request:"mediaType=application/json"`
    
}

type ListAuditSuppressionsResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ListAuditSuppressionsResponse *shared.ListAuditSuppressionsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

