package operations




type GetGetLaunchTemplateDataActionEnum string

const (
    GetGetLaunchTemplateDataActionEnumGetLaunchTemplateData GetGetLaunchTemplateDataActionEnum = "GetLaunchTemplateData"
)



type GetGetLaunchTemplateDataVersionEnum string

const (
    GetGetLaunchTemplateDataVersionEnumTwoThousandAndSixteen1115 GetGetLaunchTemplateDataVersionEnum = "2016-11-15"
)


type GetGetLaunchTemplateDataQueryParams struct {
    Action GetGetLaunchTemplateDataActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    InstanceID string `queryParam:"style=form,explode=true,name=InstanceId"`
    Version GetGetLaunchTemplateDataVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetLaunchTemplateDataHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetLaunchTemplateDataRequest struct {
    QueryParams GetGetLaunchTemplateDataQueryParams 
    Headers GetGetLaunchTemplateDataHeaders 
    
}

type GetGetLaunchTemplateDataResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

