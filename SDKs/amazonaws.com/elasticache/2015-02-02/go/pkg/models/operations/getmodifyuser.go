package operations




type GetModifyUserActionEnum string

const (
    GetModifyUserActionEnumModifyUser GetModifyUserActionEnum = "ModifyUser"
)



type GetModifyUserVersionEnum string

const (
    GetModifyUserVersionEnumTwoThousandAndFifteen0202 GetModifyUserVersionEnum = "2015-02-02"
)


type GetModifyUserQueryParams struct {
    AccessString *string `queryParam:"style=form,explode=true,name=AccessString"`
    Action GetModifyUserActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AppendAccessString *string `queryParam:"style=form,explode=true,name=AppendAccessString"`
    NoPasswordRequired *bool `queryParam:"style=form,explode=true,name=NoPasswordRequired"`
    Passwords []string `queryParam:"style=form,explode=true,name=Passwords"`
    UserID string `queryParam:"style=form,explode=true,name=UserId"`
    Version GetModifyUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyUserHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyUserRequest struct {
    QueryParams GetModifyUserQueryParams 
    Headers GetModifyUserHeaders 
    
}

type GetModifyUserResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

