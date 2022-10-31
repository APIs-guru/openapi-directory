package operations

import (
"time"
"openapi/pkg/models/shared")

type ListAuditFindingsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListAuditFindingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListAuditFindingsRequestBodyResourceIdentifier struct {
    Account *string `json:"account,omitempty"`
    CaCertificateID *string `json:"caCertificateId,omitempty"`
    ClientID *string `json:"clientId,omitempty"`
    CognitoIdentityPoolID *string `json:"cognitoIdentityPoolId,omitempty"`
    DeviceCertificateID *string `json:"deviceCertificateId,omitempty"`
    IamRoleArn *string `json:"iamRoleArn,omitempty"`
    PolicyVersionIdentifier *shared.PolicyVersionIdentifier `json:"policyVersionIdentifier,omitempty"`
    RoleAliasArn *string `json:"roleAliasArn,omitempty"`
    
}

type ListAuditFindingsRequestBody struct {
    CheckName *string `json:"checkName,omitempty"`
    EndTime *time.Time `json:"endTime,omitempty"`
    ListSuppressedFindings *bool `json:"listSuppressedFindings,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    ResourceIdentifier *ListAuditFindingsRequestBodyResourceIdentifier `json:"resourceIdentifier,omitempty"`
    StartTime *time.Time `json:"startTime,omitempty"`
    TaskID *string `json:"taskId,omitempty"`
    
}

type ListAuditFindingsRequest struct {
    QueryParams ListAuditFindingsQueryParams 
    Headers ListAuditFindingsHeaders 
    Request ListAuditFindingsRequestBody `request:"mediaType=application/json"`
    
}

type ListAuditFindingsResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ListAuditFindingsResponse *shared.ListAuditFindingsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

