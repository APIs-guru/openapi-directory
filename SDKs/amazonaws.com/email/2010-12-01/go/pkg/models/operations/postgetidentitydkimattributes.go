package operations




type PostGetIdentityDkimAttributesActionEnum string

const (
    PostGetIdentityDkimAttributesActionEnumGetIdentityDkimAttributes PostGetIdentityDkimAttributesActionEnum = "GetIdentityDkimAttributes"
)



type PostGetIdentityDkimAttributesVersionEnum string

const (
    PostGetIdentityDkimAttributesVersionEnumTwoThousandAndTen1201 PostGetIdentityDkimAttributesVersionEnum = "2010-12-01"
)


type PostGetIdentityDkimAttributesQueryParams struct {
    Action PostGetIdentityDkimAttributesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetIdentityDkimAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetIdentityDkimAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetIdentityDkimAttributesRequest struct {
    QueryParams PostGetIdentityDkimAttributesQueryParams 
    Headers PostGetIdentityDkimAttributesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetIdentityDkimAttributesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

