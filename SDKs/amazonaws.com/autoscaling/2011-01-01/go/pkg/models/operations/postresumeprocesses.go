package operations




type PostResumeProcessesActionEnum string

const (
    PostResumeProcessesActionEnumResumeProcesses PostResumeProcessesActionEnum = "ResumeProcesses"
)



type PostResumeProcessesVersionEnum string

const (
    PostResumeProcessesVersionEnumTwoThousandAndEleven0101 PostResumeProcessesVersionEnum = "2011-01-01"
)


type PostResumeProcessesQueryParams struct {
    Action PostResumeProcessesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostResumeProcessesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostResumeProcessesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostResumeProcessesRequest struct {
    QueryParams PostResumeProcessesQueryParams 
    Headers PostResumeProcessesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostResumeProcessesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

