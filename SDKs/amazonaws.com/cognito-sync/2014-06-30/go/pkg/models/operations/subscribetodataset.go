package operations

type SubscribeToDatasetPathParams struct {
	DatasetName    string `pathParam:"style=simple,explode=false,name=DatasetName"`
	DeviceID       string `pathParam:"style=simple,explode=false,name=DeviceId"`
	IdentityID     string `pathParam:"style=simple,explode=false,name=IdentityId"`
	IdentityPoolID string `pathParam:"style=simple,explode=false,name=IdentityPoolId"`
}

type SubscribeToDatasetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type SubscribeToDatasetRequest struct {
	PathParams SubscribeToDatasetPathParams
	Headers    SubscribeToDatasetHeaders
}

type SubscribeToDatasetResponse struct {
	ContentType                   string
	InternalErrorException        *interface{}
	InvalidConfigurationException *interface{}
	InvalidParameterException     *interface{}
	NotAuthorizedException        *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	SubscribeToDatasetResponse    map[string]interface{}
	TooManyRequestsException      *interface{}
}
