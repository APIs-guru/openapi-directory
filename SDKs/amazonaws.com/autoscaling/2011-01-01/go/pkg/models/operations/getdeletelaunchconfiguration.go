package operations




type GetDeleteLaunchConfigurationActionEnum string

const (
    GetDeleteLaunchConfigurationActionEnumDeleteLaunchConfiguration GetDeleteLaunchConfigurationActionEnum = "DeleteLaunchConfiguration"
)



type GetDeleteLaunchConfigurationVersionEnum string

const (
    GetDeleteLaunchConfigurationVersionEnumTwoThousandAndEleven0101 GetDeleteLaunchConfigurationVersionEnum = "2011-01-01"
)


type GetDeleteLaunchConfigurationQueryParams struct {
    Action GetDeleteLaunchConfigurationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    LaunchConfigurationName string `queryParam:"style=form,explode=true,name=LaunchConfigurationName"`
    Version GetDeleteLaunchConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteLaunchConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteLaunchConfigurationRequest struct {
    QueryParams GetDeleteLaunchConfigurationQueryParams 
    Headers GetDeleteLaunchConfigurationHeaders 
    
}

type GetDeleteLaunchConfigurationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

