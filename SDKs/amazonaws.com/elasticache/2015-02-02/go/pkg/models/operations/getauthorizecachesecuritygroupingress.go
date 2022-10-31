package operations




type GetAuthorizeCacheSecurityGroupIngressActionEnum string

const (
    GetAuthorizeCacheSecurityGroupIngressActionEnumAuthorizeCacheSecurityGroupIngress GetAuthorizeCacheSecurityGroupIngressActionEnum = "AuthorizeCacheSecurityGroupIngress"
)



type GetAuthorizeCacheSecurityGroupIngressVersionEnum string

const (
    GetAuthorizeCacheSecurityGroupIngressVersionEnumTwoThousandAndFifteen0202 GetAuthorizeCacheSecurityGroupIngressVersionEnum = "2015-02-02"
)


type GetAuthorizeCacheSecurityGroupIngressQueryParams struct {
    Action GetAuthorizeCacheSecurityGroupIngressActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CacheSecurityGroupName string `queryParam:"style=form,explode=true,name=CacheSecurityGroupName"`
    Ec2SecurityGroupName string `queryParam:"style=form,explode=true,name=EC2SecurityGroupName"`
    Ec2SecurityGroupOwnerID string `queryParam:"style=form,explode=true,name=EC2SecurityGroupOwnerId"`
    Version GetAuthorizeCacheSecurityGroupIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetAuthorizeCacheSecurityGroupIngressHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAuthorizeCacheSecurityGroupIngressRequest struct {
    QueryParams GetAuthorizeCacheSecurityGroupIngressQueryParams 
    Headers GetAuthorizeCacheSecurityGroupIngressHeaders 
    
}

type GetAuthorizeCacheSecurityGroupIngressResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

