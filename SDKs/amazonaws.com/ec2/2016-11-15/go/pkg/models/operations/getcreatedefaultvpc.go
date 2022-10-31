package operations




type GetCreateDefaultVpcActionEnum string

const (
    GetCreateDefaultVpcActionEnumCreateDefaultVpc GetCreateDefaultVpcActionEnum = "CreateDefaultVpc"
)



type GetCreateDefaultVpcVersionEnum string

const (
    GetCreateDefaultVpcVersionEnumTwoThousandAndSixteen1115 GetCreateDefaultVpcVersionEnum = "2016-11-15"
)


type GetCreateDefaultVpcQueryParams struct {
    Action GetCreateDefaultVpcActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetCreateDefaultVpcVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCreateDefaultVpcHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCreateDefaultVpcRequest struct {
    QueryParams GetCreateDefaultVpcQueryParams 
    Headers GetCreateDefaultVpcHeaders 
    
}

type GetCreateDefaultVpcResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

