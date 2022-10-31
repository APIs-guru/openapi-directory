package operations




type PostGetIdentityNotificationAttributesActionEnum string

const (
    PostGetIdentityNotificationAttributesActionEnumGetIdentityNotificationAttributes PostGetIdentityNotificationAttributesActionEnum = "GetIdentityNotificationAttributes"
)



type PostGetIdentityNotificationAttributesVersionEnum string

const (
    PostGetIdentityNotificationAttributesVersionEnumTwoThousandAndTen1201 PostGetIdentityNotificationAttributesVersionEnum = "2010-12-01"
)


type PostGetIdentityNotificationAttributesQueryParams struct {
    Action PostGetIdentityNotificationAttributesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetIdentityNotificationAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetIdentityNotificationAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetIdentityNotificationAttributesRequest struct {
    QueryParams PostGetIdentityNotificationAttributesQueryParams 
    Headers PostGetIdentityNotificationAttributesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetIdentityNotificationAttributesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

