package operations

type PostModifyVpcEndpointServiceConfigurationActionEnum string

const (
	PostModifyVpcEndpointServiceConfigurationActionEnumModifyVpcEndpointServiceConfiguration PostModifyVpcEndpointServiceConfigurationActionEnum = "ModifyVpcEndpointServiceConfiguration"
)

type PostModifyVpcEndpointServiceConfigurationVersionEnum string

const (
	PostModifyVpcEndpointServiceConfigurationVersionEnumTwoThousandAndSixteen1115 PostModifyVpcEndpointServiceConfigurationVersionEnum = "2016-11-15"
)

type PostModifyVpcEndpointServiceConfigurationQueryParams struct {
	Action  PostModifyVpcEndpointServiceConfigurationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyVpcEndpointServiceConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyVpcEndpointServiceConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyVpcEndpointServiceConfigurationRequest struct {
	QueryParams PostModifyVpcEndpointServiceConfigurationQueryParams
	Headers     PostModifyVpcEndpointServiceConfigurationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyVpcEndpointServiceConfigurationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
