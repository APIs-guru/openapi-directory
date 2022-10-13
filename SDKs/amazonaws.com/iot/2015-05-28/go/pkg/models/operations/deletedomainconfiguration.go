package operations

type DeleteDomainConfigurationPathParams struct {
	DomainConfigurationName string `pathParam:"style=simple,explode=false,name=domainConfigurationName"`
}

type DeleteDomainConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteDomainConfigurationRequest struct {
	PathParams DeleteDomainConfigurationPathParams
	Headers    DeleteDomainConfigurationHeaders
}

type DeleteDomainConfigurationResponse struct {
	ContentType                       string
	DeleteDomainConfigurationResponse map[string]interface{}
	InternalFailureException          *interface{}
	InvalidRequestException           *interface{}
	ResourceNotFoundException         *interface{}
	ServiceUnavailableException       *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	UnauthorizedException             *interface{}
}
