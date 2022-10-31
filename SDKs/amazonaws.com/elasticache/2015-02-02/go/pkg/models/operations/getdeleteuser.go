package operations




type GetDeleteUserActionEnum string

const (
    GetDeleteUserActionEnumDeleteUser GetDeleteUserActionEnum = "DeleteUser"
)



type GetDeleteUserVersionEnum string

const (
    GetDeleteUserVersionEnumTwoThousandAndFifteen0202 GetDeleteUserVersionEnum = "2015-02-02"
)


type GetDeleteUserQueryParams struct {
    Action GetDeleteUserActionEnum `queryParam:"style=form,explode=true,name=Action"`
    UserID string `queryParam:"style=form,explode=true,name=UserId"`
    Version GetDeleteUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteUserHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteUserRequest struct {
    QueryParams GetDeleteUserQueryParams 
    Headers GetDeleteUserHeaders 
    
}

type GetDeleteUserResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

