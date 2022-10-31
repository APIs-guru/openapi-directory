package operations




type PostDeleteNetworkACLEntryActionEnum string

const (
    PostDeleteNetworkACLEntryActionEnumDeleteNetworkACLEntry PostDeleteNetworkACLEntryActionEnum = "DeleteNetworkAclEntry"
)



type PostDeleteNetworkACLEntryVersionEnum string

const (
    PostDeleteNetworkACLEntryVersionEnumTwoThousandAndSixteen1115 PostDeleteNetworkACLEntryVersionEnum = "2016-11-15"
)


type PostDeleteNetworkACLEntryQueryParams struct {
    Action PostDeleteNetworkACLEntryActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteNetworkACLEntryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteNetworkACLEntryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteNetworkACLEntryRequest struct {
    QueryParams PostDeleteNetworkACLEntryQueryParams 
    Headers PostDeleteNetworkACLEntryHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteNetworkACLEntryResponse struct {
    ContentType string 
    StatusCode int64 
    
}

