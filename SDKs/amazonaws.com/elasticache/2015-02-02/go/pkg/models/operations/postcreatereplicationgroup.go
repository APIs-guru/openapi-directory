package operations




type PostCreateReplicationGroupActionEnum string

const (
    PostCreateReplicationGroupActionEnumCreateReplicationGroup PostCreateReplicationGroupActionEnum = "CreateReplicationGroup"
)



type PostCreateReplicationGroupVersionEnum string

const (
    PostCreateReplicationGroupVersionEnumTwoThousandAndFifteen0202 PostCreateReplicationGroupVersionEnum = "2015-02-02"
)


type PostCreateReplicationGroupQueryParams struct {
    Action PostCreateReplicationGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateReplicationGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateReplicationGroupRequest struct {
    QueryParams PostCreateReplicationGroupQueryParams 
    Headers PostCreateReplicationGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateReplicationGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

