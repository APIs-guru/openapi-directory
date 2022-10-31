package operations




type ListCachePolicies20200531TypeEnum string

const (
    ListCachePolicies20200531TypeEnumManaged ListCachePolicies20200531TypeEnum = "managed"
ListCachePolicies20200531TypeEnumCustom ListCachePolicies20200531TypeEnum = "custom"
)


type ListCachePolicies20200531QueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
    Type *ListCachePolicies20200531TypeEnum `queryParam:"style=form,explode=true,name=Type"`
    
}

type ListCachePolicies20200531Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListCachePolicies20200531Request struct {
    QueryParams ListCachePolicies20200531QueryParams 
    Headers ListCachePolicies20200531Headers 
    
}

type ListCachePolicies20200531Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

