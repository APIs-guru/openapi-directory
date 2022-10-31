package operations




type PostSetIdentityDkimEnabledActionEnum string

const (
    PostSetIdentityDkimEnabledActionEnumSetIdentityDkimEnabled PostSetIdentityDkimEnabledActionEnum = "SetIdentityDkimEnabled"
)



type PostSetIdentityDkimEnabledVersionEnum string

const (
    PostSetIdentityDkimEnabledVersionEnumTwoThousandAndTen1201 PostSetIdentityDkimEnabledVersionEnum = "2010-12-01"
)


type PostSetIdentityDkimEnabledQueryParams struct {
    Action PostSetIdentityDkimEnabledActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostSetIdentityDkimEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostSetIdentityDkimEnabledHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostSetIdentityDkimEnabledRequest struct {
    QueryParams PostSetIdentityDkimEnabledQueryParams 
    Headers PostSetIdentityDkimEnabledHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostSetIdentityDkimEnabledResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

