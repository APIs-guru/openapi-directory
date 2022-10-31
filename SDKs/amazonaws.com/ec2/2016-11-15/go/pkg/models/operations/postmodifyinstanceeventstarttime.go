package operations




type PostModifyInstanceEventStartTimeActionEnum string

const (
    PostModifyInstanceEventStartTimeActionEnumModifyInstanceEventStartTime PostModifyInstanceEventStartTimeActionEnum = "ModifyInstanceEventStartTime"
)



type PostModifyInstanceEventStartTimeVersionEnum string

const (
    PostModifyInstanceEventStartTimeVersionEnumTwoThousandAndSixteen1115 PostModifyInstanceEventStartTimeVersionEnum = "2016-11-15"
)


type PostModifyInstanceEventStartTimeQueryParams struct {
    Action PostModifyInstanceEventStartTimeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyInstanceEventStartTimeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyInstanceEventStartTimeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyInstanceEventStartTimeRequest struct {
    QueryParams PostModifyInstanceEventStartTimeQueryParams 
    Headers PostModifyInstanceEventStartTimeHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyInstanceEventStartTimeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

