package operations




type GetDeleteApplicationActionEnum string

const (
    GetDeleteApplicationActionEnumDeleteApplication GetDeleteApplicationActionEnum = "DeleteApplication"
)



type GetDeleteApplicationVersionEnum string

const (
    GetDeleteApplicationVersionEnumTwoThousandAndTen1201 GetDeleteApplicationVersionEnum = "2010-12-01"
)


type GetDeleteApplicationQueryParams struct {
    Action GetDeleteApplicationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ApplicationName string `queryParam:"style=form,explode=true,name=ApplicationName"`
    TerminateEnvByForce *bool `queryParam:"style=form,explode=true,name=TerminateEnvByForce"`
    Version GetDeleteApplicationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteApplicationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteApplicationRequest struct {
    QueryParams GetDeleteApplicationQueryParams 
    Headers GetDeleteApplicationHeaders 
    
}

type GetDeleteApplicationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

