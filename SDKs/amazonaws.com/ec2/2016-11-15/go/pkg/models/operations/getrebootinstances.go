package operations




type GetRebootInstancesActionEnum string

const (
    GetRebootInstancesActionEnumRebootInstances GetRebootInstancesActionEnum = "RebootInstances"
)



type GetRebootInstancesVersionEnum string

const (
    GetRebootInstancesVersionEnumTwoThousandAndSixteen1115 GetRebootInstancesVersionEnum = "2016-11-15"
)


type GetRebootInstancesQueryParams struct {
    Action GetRebootInstancesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    InstanceID []string `queryParam:"style=form,explode=true,name=InstanceId"`
    Version GetRebootInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRebootInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRebootInstancesRequest struct {
    QueryParams GetRebootInstancesQueryParams 
    Headers GetRebootInstancesHeaders 
    
}

type GetRebootInstancesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

