package operations




type GetVerifyEmailIdentityActionEnum string

const (
    GetVerifyEmailIdentityActionEnumVerifyEmailIdentity GetVerifyEmailIdentityActionEnum = "VerifyEmailIdentity"
)



type GetVerifyEmailIdentityVersionEnum string

const (
    GetVerifyEmailIdentityVersionEnumTwoThousandAndTen1201 GetVerifyEmailIdentityVersionEnum = "2010-12-01"
)


type GetVerifyEmailIdentityQueryParams struct {
    Action GetVerifyEmailIdentityActionEnum `queryParam:"style=form,explode=true,name=Action"`
    EmailAddress string `queryParam:"style=form,explode=true,name=EmailAddress"`
    Version GetVerifyEmailIdentityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetVerifyEmailIdentityHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetVerifyEmailIdentityRequest struct {
    QueryParams GetVerifyEmailIdentityQueryParams 
    Headers GetVerifyEmailIdentityHeaders 
    
}

type GetVerifyEmailIdentityResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

