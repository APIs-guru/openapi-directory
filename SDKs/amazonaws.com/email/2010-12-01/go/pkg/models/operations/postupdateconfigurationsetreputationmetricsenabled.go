package operations




type PostUpdateConfigurationSetReputationMetricsEnabledActionEnum string

const (
    PostUpdateConfigurationSetReputationMetricsEnabledActionEnumUpdateConfigurationSetReputationMetricsEnabled PostUpdateConfigurationSetReputationMetricsEnabledActionEnum = "UpdateConfigurationSetReputationMetricsEnabled"
)



type PostUpdateConfigurationSetReputationMetricsEnabledVersionEnum string

const (
    PostUpdateConfigurationSetReputationMetricsEnabledVersionEnumTwoThousandAndTen1201 PostUpdateConfigurationSetReputationMetricsEnabledVersionEnum = "2010-12-01"
)


type PostUpdateConfigurationSetReputationMetricsEnabledQueryParams struct {
    Action PostUpdateConfigurationSetReputationMetricsEnabledActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUpdateConfigurationSetReputationMetricsEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdateConfigurationSetReputationMetricsEnabledHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUpdateConfigurationSetReputationMetricsEnabledRequest struct {
    QueryParams PostUpdateConfigurationSetReputationMetricsEnabledQueryParams 
    Headers PostUpdateConfigurationSetReputationMetricsEnabledHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdateConfigurationSetReputationMetricsEnabledResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

