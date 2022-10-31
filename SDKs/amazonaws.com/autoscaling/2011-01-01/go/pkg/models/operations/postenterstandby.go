package operations




type PostEnterStandbyActionEnum string

const (
    PostEnterStandbyActionEnumEnterStandby PostEnterStandbyActionEnum = "EnterStandby"
)



type PostEnterStandbyVersionEnum string

const (
    PostEnterStandbyVersionEnumTwoThousandAndEleven0101 PostEnterStandbyVersionEnum = "2011-01-01"
)


type PostEnterStandbyQueryParams struct {
    Action PostEnterStandbyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostEnterStandbyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostEnterStandbyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostEnterStandbyRequest struct {
    QueryParams PostEnterStandbyQueryParams 
    Headers PostEnterStandbyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostEnterStandbyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

