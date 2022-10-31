package operations




type PostRestoreManagedPrefixListVersionActionEnum string

const (
    PostRestoreManagedPrefixListVersionActionEnumRestoreManagedPrefixListVersion PostRestoreManagedPrefixListVersionActionEnum = "RestoreManagedPrefixListVersion"
)



type PostRestoreManagedPrefixListVersionVersionEnum string

const (
    PostRestoreManagedPrefixListVersionVersionEnumTwoThousandAndSixteen1115 PostRestoreManagedPrefixListVersionVersionEnum = "2016-11-15"
)


type PostRestoreManagedPrefixListVersionQueryParams struct {
    Action PostRestoreManagedPrefixListVersionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRestoreManagedPrefixListVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRestoreManagedPrefixListVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRestoreManagedPrefixListVersionRequest struct {
    QueryParams PostRestoreManagedPrefixListVersionQueryParams 
    Headers PostRestoreManagedPrefixListVersionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRestoreManagedPrefixListVersionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

