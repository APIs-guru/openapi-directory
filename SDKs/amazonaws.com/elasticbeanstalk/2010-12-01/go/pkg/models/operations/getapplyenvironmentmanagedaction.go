package operations




type GetApplyEnvironmentManagedActionActionEnum string

const (
    GetApplyEnvironmentManagedActionActionEnumApplyEnvironmentManagedAction GetApplyEnvironmentManagedActionActionEnum = "ApplyEnvironmentManagedAction"
)



type GetApplyEnvironmentManagedActionVersionEnum string

const (
    GetApplyEnvironmentManagedActionVersionEnumTwoThousandAndTen1201 GetApplyEnvironmentManagedActionVersionEnum = "2010-12-01"
)


type GetApplyEnvironmentManagedActionQueryParams struct {
    Action GetApplyEnvironmentManagedActionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ActionID string `queryParam:"style=form,explode=true,name=ActionId"`
    EnvironmentID *string `queryParam:"style=form,explode=true,name=EnvironmentId"`
    EnvironmentName *string `queryParam:"style=form,explode=true,name=EnvironmentName"`
    Version GetApplyEnvironmentManagedActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetApplyEnvironmentManagedActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetApplyEnvironmentManagedActionRequest struct {
    QueryParams GetApplyEnvironmentManagedActionQueryParams 
    Headers GetApplyEnvironmentManagedActionHeaders 
    
}

type GetApplyEnvironmentManagedActionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

