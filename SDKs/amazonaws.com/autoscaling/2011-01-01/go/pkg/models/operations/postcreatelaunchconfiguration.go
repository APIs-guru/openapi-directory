package operations

type PostCreateLaunchConfigurationActionEnum string

const (
	PostCreateLaunchConfigurationActionEnumCreateLaunchConfiguration PostCreateLaunchConfigurationActionEnum = "CreateLaunchConfiguration"
)

type PostCreateLaunchConfigurationVersionEnum string

const (
	PostCreateLaunchConfigurationVersionEnumTwoThousandAndEleven0101 PostCreateLaunchConfigurationVersionEnum = "2011-01-01"
)

type PostCreateLaunchConfigurationQueryParams struct {
	Action  PostCreateLaunchConfigurationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateLaunchConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateLaunchConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateLaunchConfigurationRequest struct {
	QueryParams PostCreateLaunchConfigurationQueryParams
	Headers     PostCreateLaunchConfigurationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateLaunchConfigurationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
