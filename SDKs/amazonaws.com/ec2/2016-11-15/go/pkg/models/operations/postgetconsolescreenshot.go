package operations




type PostGetConsoleScreenshotActionEnum string

const (
    PostGetConsoleScreenshotActionEnumGetConsoleScreenshot PostGetConsoleScreenshotActionEnum = "GetConsoleScreenshot"
)



type PostGetConsoleScreenshotVersionEnum string

const (
    PostGetConsoleScreenshotVersionEnumTwoThousandAndSixteen1115 PostGetConsoleScreenshotVersionEnum = "2016-11-15"
)


type PostGetConsoleScreenshotQueryParams struct {
    Action PostGetConsoleScreenshotActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetConsoleScreenshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetConsoleScreenshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetConsoleScreenshotRequest struct {
    QueryParams PostGetConsoleScreenshotQueryParams 
    Headers PostGetConsoleScreenshotHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetConsoleScreenshotResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

