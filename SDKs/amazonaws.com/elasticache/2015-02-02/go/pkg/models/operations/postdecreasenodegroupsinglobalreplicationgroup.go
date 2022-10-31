package operations




type PostDecreaseNodeGroupsInGlobalReplicationGroupActionEnum string

const (
    PostDecreaseNodeGroupsInGlobalReplicationGroupActionEnumDecreaseNodeGroupsInGlobalReplicationGroup PostDecreaseNodeGroupsInGlobalReplicationGroupActionEnum = "DecreaseNodeGroupsInGlobalReplicationGroup"
)



type PostDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum string

const (
    PostDecreaseNodeGroupsInGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 PostDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum = "2015-02-02"
)


type PostDecreaseNodeGroupsInGlobalReplicationGroupQueryParams struct {
    Action PostDecreaseNodeGroupsInGlobalReplicationGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDecreaseNodeGroupsInGlobalReplicationGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDecreaseNodeGroupsInGlobalReplicationGroupRequest struct {
    QueryParams PostDecreaseNodeGroupsInGlobalReplicationGroupQueryParams 
    Headers PostDecreaseNodeGroupsInGlobalReplicationGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDecreaseNodeGroupsInGlobalReplicationGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

