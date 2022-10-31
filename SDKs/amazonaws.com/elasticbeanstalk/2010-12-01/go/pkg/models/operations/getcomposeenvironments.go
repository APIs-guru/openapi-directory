package operations




type GetComposeEnvironmentsActionEnum string

const (
    GetComposeEnvironmentsActionEnumComposeEnvironments GetComposeEnvironmentsActionEnum = "ComposeEnvironments"
)



type GetComposeEnvironmentsVersionEnum string

const (
    GetComposeEnvironmentsVersionEnumTwoThousandAndTen1201 GetComposeEnvironmentsVersionEnum = "2010-12-01"
)


type GetComposeEnvironmentsQueryParams struct {
    Action GetComposeEnvironmentsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ApplicationName *string `queryParam:"style=form,explode=true,name=ApplicationName"`
    GroupName *string `queryParam:"style=form,explode=true,name=GroupName"`
    Version GetComposeEnvironmentsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VersionLabels []string `queryParam:"style=form,explode=true,name=VersionLabels"`
    
}

type GetComposeEnvironmentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetComposeEnvironmentsRequest struct {
    QueryParams GetComposeEnvironmentsQueryParams 
    Headers GetComposeEnvironmentsHeaders 
    
}

type GetComposeEnvironmentsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

