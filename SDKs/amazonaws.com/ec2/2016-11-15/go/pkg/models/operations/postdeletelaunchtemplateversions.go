package operations




type PostDeleteLaunchTemplateVersionsActionEnum string

const (
    PostDeleteLaunchTemplateVersionsActionEnumDeleteLaunchTemplateVersions PostDeleteLaunchTemplateVersionsActionEnum = "DeleteLaunchTemplateVersions"
)



type PostDeleteLaunchTemplateVersionsVersionEnum string

const (
    PostDeleteLaunchTemplateVersionsVersionEnumTwoThousandAndSixteen1115 PostDeleteLaunchTemplateVersionsVersionEnum = "2016-11-15"
)


type PostDeleteLaunchTemplateVersionsQueryParams struct {
    Action PostDeleteLaunchTemplateVersionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteLaunchTemplateVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteLaunchTemplateVersionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteLaunchTemplateVersionsRequest struct {
    QueryParams PostDeleteLaunchTemplateVersionsQueryParams 
    Headers PostDeleteLaunchTemplateVersionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteLaunchTemplateVersionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

