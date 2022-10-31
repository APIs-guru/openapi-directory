package operations




type GetListAvailableSolutionStacksActionEnum string

const (
    GetListAvailableSolutionStacksActionEnumListAvailableSolutionStacks GetListAvailableSolutionStacksActionEnum = "ListAvailableSolutionStacks"
)



type GetListAvailableSolutionStacksVersionEnum string

const (
    GetListAvailableSolutionStacksVersionEnumTwoThousandAndTen1201 GetListAvailableSolutionStacksVersionEnum = "2010-12-01"
)


type GetListAvailableSolutionStacksQueryParams struct {
    Action GetListAvailableSolutionStacksActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version GetListAvailableSolutionStacksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetListAvailableSolutionStacksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetListAvailableSolutionStacksRequest struct {
    QueryParams GetListAvailableSolutionStacksQueryParams 
    Headers GetListAvailableSolutionStacksHeaders 
    
}

type GetListAvailableSolutionStacksResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

