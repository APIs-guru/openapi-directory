package operations




type PostGetAssociatedIpv6PoolCidrsActionEnum string

const (
    PostGetAssociatedIpv6PoolCidrsActionEnumGetAssociatedIpv6PoolCidrs PostGetAssociatedIpv6PoolCidrsActionEnum = "GetAssociatedIpv6PoolCidrs"
)



type PostGetAssociatedIpv6PoolCidrsVersionEnum string

const (
    PostGetAssociatedIpv6PoolCidrsVersionEnumTwoThousandAndSixteen1115 PostGetAssociatedIpv6PoolCidrsVersionEnum = "2016-11-15"
)


type PostGetAssociatedIpv6PoolCidrsQueryParams struct {
    Action PostGetAssociatedIpv6PoolCidrsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostGetAssociatedIpv6PoolCidrsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetAssociatedIpv6PoolCidrsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetAssociatedIpv6PoolCidrsRequest struct {
    QueryParams PostGetAssociatedIpv6PoolCidrsQueryParams 
    Headers PostGetAssociatedIpv6PoolCidrsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetAssociatedIpv6PoolCidrsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

