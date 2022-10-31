package operations




type PostDeleteManagedPrefixListActionEnum string

const (
    PostDeleteManagedPrefixListActionEnumDeleteManagedPrefixList PostDeleteManagedPrefixListActionEnum = "DeleteManagedPrefixList"
)



type PostDeleteManagedPrefixListVersionEnum string

const (
    PostDeleteManagedPrefixListVersionEnumTwoThousandAndSixteen1115 PostDeleteManagedPrefixListVersionEnum = "2016-11-15"
)


type PostDeleteManagedPrefixListQueryParams struct {
    Action PostDeleteManagedPrefixListActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteManagedPrefixListVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteManagedPrefixListHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteManagedPrefixListRequest struct {
    QueryParams PostDeleteManagedPrefixListQueryParams 
    Headers PostDeleteManagedPrefixListHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteManagedPrefixListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

