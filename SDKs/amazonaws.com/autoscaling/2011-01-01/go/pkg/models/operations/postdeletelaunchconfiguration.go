package operations

type PostDeleteLaunchConfigurationActionEnum string

const (
	PostDeleteLaunchConfigurationActionEnumDeleteLaunchConfiguration PostDeleteLaunchConfigurationActionEnum = "DeleteLaunchConfiguration"
)

type PostDeleteLaunchConfigurationVersionEnum string

const (
	PostDeleteLaunchConfigurationVersionEnumTwoThousandAndEleven0101 PostDeleteLaunchConfigurationVersionEnum = "2011-01-01"
)

type PostDeleteLaunchConfigurationQueryParams struct {
	Action  PostDeleteLaunchConfigurationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteLaunchConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteLaunchConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteLaunchConfigurationRequest struct {
	QueryParams PostDeleteLaunchConfigurationQueryParams
	Headers     PostDeleteLaunchConfigurationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteLaunchConfigurationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
