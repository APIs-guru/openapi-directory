package operations




type PostDeleteVpcEndpointServiceConfigurationsActionEnum string

const (
    PostDeleteVpcEndpointServiceConfigurationsActionEnumDeleteVpcEndpointServiceConfigurations PostDeleteVpcEndpointServiceConfigurationsActionEnum = "DeleteVpcEndpointServiceConfigurations"
)



type PostDeleteVpcEndpointServiceConfigurationsVersionEnum string

const (
    PostDeleteVpcEndpointServiceConfigurationsVersionEnumTwoThousandAndSixteen1115 PostDeleteVpcEndpointServiceConfigurationsVersionEnum = "2016-11-15"
)


type PostDeleteVpcEndpointServiceConfigurationsQueryParams struct {
    Action PostDeleteVpcEndpointServiceConfigurationsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteVpcEndpointServiceConfigurationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteVpcEndpointServiceConfigurationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteVpcEndpointServiceConfigurationsRequest struct {
    QueryParams PostDeleteVpcEndpointServiceConfigurationsQueryParams 
    Headers PostDeleteVpcEndpointServiceConfigurationsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteVpcEndpointServiceConfigurationsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

