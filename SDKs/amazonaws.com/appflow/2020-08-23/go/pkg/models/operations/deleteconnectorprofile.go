package operations

type DeleteConnectorProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteConnectorProfileRequestBody struct {
	ConnectorProfileName string `json:"connectorProfileName"`
	ForceDelete          *bool  `json:"forceDelete"`
}

type DeleteConnectorProfileRequest struct {
	Headers DeleteConnectorProfileHeaders
	Request DeleteConnectorProfileRequestBody `request:"mediaType=application/json"`
}

type DeleteConnectorProfileResponse struct {
	ConflictException              *interface{}
	ContentType                    string
	DeleteConnectorProfileResponse map[string]interface{}
	InternalServerException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
