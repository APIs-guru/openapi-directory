package operations




type PostModifyCacheParameterGroupActionEnum string

const (
    PostModifyCacheParameterGroupActionEnumModifyCacheParameterGroup PostModifyCacheParameterGroupActionEnum = "ModifyCacheParameterGroup"
)



type PostModifyCacheParameterGroupVersionEnum string

const (
    PostModifyCacheParameterGroupVersionEnumTwoThousandAndFifteen0202 PostModifyCacheParameterGroupVersionEnum = "2015-02-02"
)


type PostModifyCacheParameterGroupQueryParams struct {
    Action PostModifyCacheParameterGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyCacheParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyCacheParameterGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyCacheParameterGroupRequest struct {
    QueryParams PostModifyCacheParameterGroupQueryParams 
    Headers PostModifyCacheParameterGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyCacheParameterGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

