package operations




type PostModifyTargetGroupAttributesActionEnum string

const (
    PostModifyTargetGroupAttributesActionEnumModifyTargetGroupAttributes PostModifyTargetGroupAttributesActionEnum = "ModifyTargetGroupAttributes"
)



type PostModifyTargetGroupAttributesVersionEnum string

const (
    PostModifyTargetGroupAttributesVersionEnumTwoThousandAndFifteen1201 PostModifyTargetGroupAttributesVersionEnum = "2015-12-01"
)


type PostModifyTargetGroupAttributesQueryParams struct {
    Action PostModifyTargetGroupAttributesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyTargetGroupAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyTargetGroupAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyTargetGroupAttributesRequest struct {
    QueryParams PostModifyTargetGroupAttributesQueryParams 
    Headers PostModifyTargetGroupAttributesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyTargetGroupAttributesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

