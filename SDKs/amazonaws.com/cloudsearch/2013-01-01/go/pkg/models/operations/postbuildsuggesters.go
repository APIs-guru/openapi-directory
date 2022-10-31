package operations




type PostBuildSuggestersActionEnum string

const (
    PostBuildSuggestersActionEnumBuildSuggesters PostBuildSuggestersActionEnum = "BuildSuggesters"
)



type PostBuildSuggestersVersionEnum string

const (
    PostBuildSuggestersVersionEnumTwoThousandAndThirteen0101 PostBuildSuggestersVersionEnum = "2013-01-01"
)


type PostBuildSuggestersQueryParams struct {
    Action PostBuildSuggestersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostBuildSuggestersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostBuildSuggestersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostBuildSuggestersRequest struct {
    QueryParams PostBuildSuggestersQueryParams 
    Headers PostBuildSuggestersHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostBuildSuggestersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

