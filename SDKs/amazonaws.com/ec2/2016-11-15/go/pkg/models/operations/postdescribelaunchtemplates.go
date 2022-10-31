package operations




type PostDescribeLaunchTemplatesActionEnum string

const (
    PostDescribeLaunchTemplatesActionEnumDescribeLaunchTemplates PostDescribeLaunchTemplatesActionEnum = "DescribeLaunchTemplates"
)



type PostDescribeLaunchTemplatesVersionEnum string

const (
    PostDescribeLaunchTemplatesVersionEnumTwoThousandAndSixteen1115 PostDescribeLaunchTemplatesVersionEnum = "2016-11-15"
)


type PostDescribeLaunchTemplatesQueryParams struct {
    Action PostDescribeLaunchTemplatesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeLaunchTemplatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeLaunchTemplatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeLaunchTemplatesRequest struct {
    QueryParams PostDescribeLaunchTemplatesQueryParams 
    Headers PostDescribeLaunchTemplatesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeLaunchTemplatesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

