package operations




type GetBuildSuggestersActionEnum string

const (
    GetBuildSuggestersActionEnumBuildSuggesters GetBuildSuggestersActionEnum = "BuildSuggesters"
)



type GetBuildSuggestersVersionEnum string

const (
    GetBuildSuggestersVersionEnumTwoThousandAndThirteen0101 GetBuildSuggestersVersionEnum = "2013-01-01"
)


type GetBuildSuggestersQueryParams struct {
    Action GetBuildSuggestersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DomainName string `queryParam:"style=form,explode=true,name=DomainName"`
    Version GetBuildSuggestersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetBuildSuggestersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetBuildSuggestersRequest struct {
    QueryParams GetBuildSuggestersQueryParams 
    Headers GetBuildSuggestersHeaders 
    
}

type GetBuildSuggestersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

