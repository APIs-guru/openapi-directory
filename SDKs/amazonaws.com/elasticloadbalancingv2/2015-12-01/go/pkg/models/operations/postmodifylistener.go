package operations




type PostModifyListenerActionEnum string

const (
    PostModifyListenerActionEnumModifyListener PostModifyListenerActionEnum = "ModifyListener"
)



type PostModifyListenerVersionEnum string

const (
    PostModifyListenerVersionEnumTwoThousandAndFifteen1201 PostModifyListenerVersionEnum = "2015-12-01"
)


type PostModifyListenerQueryParams struct {
    Action PostModifyListenerActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyListenerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyListenerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyListenerRequest struct {
    QueryParams PostModifyListenerQueryParams 
    Headers PostModifyListenerHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyListenerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

