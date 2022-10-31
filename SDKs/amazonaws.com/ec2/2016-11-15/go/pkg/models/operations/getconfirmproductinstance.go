package operations




type GetConfirmProductInstanceActionEnum string

const (
    GetConfirmProductInstanceActionEnumConfirmProductInstance GetConfirmProductInstanceActionEnum = "ConfirmProductInstance"
)



type GetConfirmProductInstanceVersionEnum string

const (
    GetConfirmProductInstanceVersionEnumTwoThousandAndSixteen1115 GetConfirmProductInstanceVersionEnum = "2016-11-15"
)


type GetConfirmProductInstanceQueryParams struct {
    Action GetConfirmProductInstanceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    InstanceID string `queryParam:"style=form,explode=true,name=InstanceId"`
    ProductCode string `queryParam:"style=form,explode=true,name=ProductCode"`
    Version GetConfirmProductInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetConfirmProductInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetConfirmProductInstanceRequest struct {
    QueryParams GetConfirmProductInstanceQueryParams 
    Headers GetConfirmProductInstanceHeaders 
    
}

type GetConfirmProductInstanceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

