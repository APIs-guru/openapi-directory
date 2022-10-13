package operations

type PostModifyVpcEndpointServicePermissionsActionEnum string

const (
	PostModifyVpcEndpointServicePermissionsActionEnumModifyVpcEndpointServicePermissions PostModifyVpcEndpointServicePermissionsActionEnum = "ModifyVpcEndpointServicePermissions"
)

type PostModifyVpcEndpointServicePermissionsVersionEnum string

const (
	PostModifyVpcEndpointServicePermissionsVersionEnumTwoThousandAndSixteen1115 PostModifyVpcEndpointServicePermissionsVersionEnum = "2016-11-15"
)

type PostModifyVpcEndpointServicePermissionsQueryParams struct {
	Action  PostModifyVpcEndpointServicePermissionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyVpcEndpointServicePermissionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyVpcEndpointServicePermissionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyVpcEndpointServicePermissionsRequest struct {
	QueryParams PostModifyVpcEndpointServicePermissionsQueryParams
	Headers     PostModifyVpcEndpointServicePermissionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyVpcEndpointServicePermissionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
