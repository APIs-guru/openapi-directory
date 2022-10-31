package operations




type PostFailoverGlobalReplicationGroupActionEnum string

const (
    PostFailoverGlobalReplicationGroupActionEnumFailoverGlobalReplicationGroup PostFailoverGlobalReplicationGroupActionEnum = "FailoverGlobalReplicationGroup"
)



type PostFailoverGlobalReplicationGroupVersionEnum string

const (
    PostFailoverGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 PostFailoverGlobalReplicationGroupVersionEnum = "2015-02-02"
)


type PostFailoverGlobalReplicationGroupQueryParams struct {
    Action PostFailoverGlobalReplicationGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostFailoverGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostFailoverGlobalReplicationGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostFailoverGlobalReplicationGroupRequest struct {
    QueryParams PostFailoverGlobalReplicationGroupQueryParams 
    Headers PostFailoverGlobalReplicationGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostFailoverGlobalReplicationGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

