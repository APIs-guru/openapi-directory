package operations




type PostIncreaseReplicaCountActionEnum string

const (
    PostIncreaseReplicaCountActionEnumIncreaseReplicaCount PostIncreaseReplicaCountActionEnum = "IncreaseReplicaCount"
)



type PostIncreaseReplicaCountVersionEnum string

const (
    PostIncreaseReplicaCountVersionEnumTwoThousandAndFifteen0202 PostIncreaseReplicaCountVersionEnum = "2015-02-02"
)


type PostIncreaseReplicaCountQueryParams struct {
    Action PostIncreaseReplicaCountActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostIncreaseReplicaCountVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostIncreaseReplicaCountHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostIncreaseReplicaCountRequest struct {
    QueryParams PostIncreaseReplicaCountQueryParams 
    Headers PostIncreaseReplicaCountHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostIncreaseReplicaCountResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

