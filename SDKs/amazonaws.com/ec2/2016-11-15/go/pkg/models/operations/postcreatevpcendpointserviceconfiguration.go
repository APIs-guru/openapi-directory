package operations




type PostCreateVpcEndpointServiceConfigurationActionEnum string

const (
    PostCreateVpcEndpointServiceConfigurationActionEnumCreateVpcEndpointServiceConfiguration PostCreateVpcEndpointServiceConfigurationActionEnum = "CreateVpcEndpointServiceConfiguration"
)



type PostCreateVpcEndpointServiceConfigurationVersionEnum string

const (
    PostCreateVpcEndpointServiceConfigurationVersionEnumTwoThousandAndSixteen1115 PostCreateVpcEndpointServiceConfigurationVersionEnum = "2016-11-15"
)


type PostCreateVpcEndpointServiceConfigurationQueryParams struct {
    Action PostCreateVpcEndpointServiceConfigurationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateVpcEndpointServiceConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateVpcEndpointServiceConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateVpcEndpointServiceConfigurationRequest struct {
    QueryParams PostCreateVpcEndpointServiceConfigurationQueryParams 
    Headers PostCreateVpcEndpointServiceConfigurationHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateVpcEndpointServiceConfigurationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

