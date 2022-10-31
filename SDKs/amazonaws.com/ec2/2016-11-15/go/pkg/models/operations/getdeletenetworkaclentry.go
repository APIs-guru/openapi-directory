package operations




type GetDeleteNetworkACLEntryActionEnum string

const (
    GetDeleteNetworkACLEntryActionEnumDeleteNetworkACLEntry GetDeleteNetworkACLEntryActionEnum = "DeleteNetworkAclEntry"
)



type GetDeleteNetworkACLEntryVersionEnum string

const (
    GetDeleteNetworkACLEntryVersionEnumTwoThousandAndSixteen1115 GetDeleteNetworkACLEntryVersionEnum = "2016-11-15"
)


type GetDeleteNetworkACLEntryQueryParams struct {
    Action GetDeleteNetworkACLEntryActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Egress bool `queryParam:"style=form,explode=true,name=Egress"`
    NetworkACLID string `queryParam:"style=form,explode=true,name=NetworkAclId"`
    RuleNumber int64 `queryParam:"style=form,explode=true,name=RuleNumber"`
    Version GetDeleteNetworkACLEntryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteNetworkACLEntryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteNetworkACLEntryRequest struct {
    QueryParams GetDeleteNetworkACLEntryQueryParams 
    Headers GetDeleteNetworkACLEntryHeaders 
    
}

type GetDeleteNetworkACLEntryResponse struct {
    ContentType string 
    StatusCode int64 
    
}

