package operations




type GetDescribeLaunchConfigurationsActionEnum string

const (
    GetDescribeLaunchConfigurationsActionEnumDescribeLaunchConfigurations GetDescribeLaunchConfigurationsActionEnum = "DescribeLaunchConfigurations"
)



type GetDescribeLaunchConfigurationsVersionEnum string

const (
    GetDescribeLaunchConfigurationsVersionEnumTwoThousandAndEleven0101 GetDescribeLaunchConfigurationsVersionEnum = "2011-01-01"
)


type GetDescribeLaunchConfigurationsQueryParams struct {
    Action GetDescribeLaunchConfigurationsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    LaunchConfigurationNames []string `queryParam:"style=form,explode=true,name=LaunchConfigurationNames"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version GetDescribeLaunchConfigurationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeLaunchConfigurationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeLaunchConfigurationsRequest struct {
    QueryParams GetDescribeLaunchConfigurationsQueryParams 
    Headers GetDescribeLaunchConfigurationsHeaders 
    
}

type GetDescribeLaunchConfigurationsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

