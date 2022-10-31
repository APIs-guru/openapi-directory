package operations




type GetCreateDefaultSubnetActionEnum string

const (
    GetCreateDefaultSubnetActionEnumCreateDefaultSubnet GetCreateDefaultSubnetActionEnum = "CreateDefaultSubnet"
)



type GetCreateDefaultSubnetVersionEnum string

const (
    GetCreateDefaultSubnetVersionEnumTwoThousandAndSixteen1115 GetCreateDefaultSubnetVersionEnum = "2016-11-15"
)


type GetCreateDefaultSubnetQueryParams struct {
    Action GetCreateDefaultSubnetActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AvailabilityZone string `queryParam:"style=form,explode=true,name=AvailabilityZone"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetCreateDefaultSubnetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCreateDefaultSubnetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCreateDefaultSubnetRequest struct {
    QueryParams GetCreateDefaultSubnetQueryParams 
    Headers GetCreateDefaultSubnetHeaders 
    
}

type GetCreateDefaultSubnetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

