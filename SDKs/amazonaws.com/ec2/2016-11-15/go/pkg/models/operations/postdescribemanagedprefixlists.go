package operations




type PostDescribeManagedPrefixListsActionEnum string

const (
    PostDescribeManagedPrefixListsActionEnumDescribeManagedPrefixLists PostDescribeManagedPrefixListsActionEnum = "DescribeManagedPrefixLists"
)



type PostDescribeManagedPrefixListsVersionEnum string

const (
    PostDescribeManagedPrefixListsVersionEnumTwoThousandAndSixteen1115 PostDescribeManagedPrefixListsVersionEnum = "2016-11-15"
)


type PostDescribeManagedPrefixListsQueryParams struct {
    Action PostDescribeManagedPrefixListsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeManagedPrefixListsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeManagedPrefixListsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeManagedPrefixListsRequest struct {
    QueryParams PostDescribeManagedPrefixListsQueryParams 
    Headers PostDescribeManagedPrefixListsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeManagedPrefixListsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

