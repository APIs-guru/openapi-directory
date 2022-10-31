package operations



type SetCognitoEventsPathParams struct {
    IdentityPoolID string `pathParam:"style=simple,explode=false,name=IdentityPoolId"`
    
}

type SetCognitoEventsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type SetCognitoEventsRequestBody struct {
    Events map[string]string `json:"Events"`
    
}

type SetCognitoEventsRequest struct {
    PathParams SetCognitoEventsPathParams 
    Headers SetCognitoEventsHeaders 
    Request SetCognitoEventsRequestBody `request:"mediaType=application/json"`
    
}

type SetCognitoEventsResponse struct {
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

