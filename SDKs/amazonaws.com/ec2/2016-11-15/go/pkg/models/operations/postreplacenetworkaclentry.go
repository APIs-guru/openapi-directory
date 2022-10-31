package operations




type PostReplaceNetworkACLEntryActionEnum string

const (
    PostReplaceNetworkACLEntryActionEnumReplaceNetworkACLEntry PostReplaceNetworkACLEntryActionEnum = "ReplaceNetworkAclEntry"
)



type PostReplaceNetworkACLEntryVersionEnum string

const (
    PostReplaceNetworkACLEntryVersionEnumTwoThousandAndSixteen1115 PostReplaceNetworkACLEntryVersionEnum = "2016-11-15"
)


type PostReplaceNetworkACLEntryQueryParams struct {
    Action PostReplaceNetworkACLEntryActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostReplaceNetworkACLEntryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostReplaceNetworkACLEntryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostReplaceNetworkACLEntryRequest struct {
    QueryParams PostReplaceNetworkACLEntryQueryParams 
    Headers PostReplaceNetworkACLEntryHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostReplaceNetworkACLEntryResponse struct {
    ContentType string 
    StatusCode int64 
    
}

