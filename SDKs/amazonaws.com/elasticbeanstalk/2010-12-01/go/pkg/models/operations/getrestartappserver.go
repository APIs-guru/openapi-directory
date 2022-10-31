package operations




type GetRestartAppServerActionEnum string

const (
    GetRestartAppServerActionEnumRestartAppServer GetRestartAppServerActionEnum = "RestartAppServer"
)



type GetRestartAppServerVersionEnum string

const (
    GetRestartAppServerVersionEnumTwoThousandAndTen1201 GetRestartAppServerVersionEnum = "2010-12-01"
)


type GetRestartAppServerQueryParams struct {
    Action GetRestartAppServerActionEnum `queryParam:"style=form,explode=true,name=Action"`
    EnvironmentID *string `queryParam:"style=form,explode=true,name=EnvironmentId"`
    EnvironmentName *string `queryParam:"style=form,explode=true,name=EnvironmentName"`
    Version GetRestartAppServerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRestartAppServerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRestartAppServerRequest struct {
    QueryParams GetRestartAppServerQueryParams 
    Headers GetRestartAppServerHeaders 
    
}

type GetRestartAppServerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

