package operations

type DeleteTargetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteTargetRequestBody struct {
	ForceUnsubscribeAll *bool  `json:"ForceUnsubscribeAll,omitempty"`
	TargetAddress       string `json:"TargetAddress"`
}

type DeleteTargetRequest struct {
	Headers DeleteTargetHeaders
	Request DeleteTargetRequestBody `request:"mediaType=application/json"`
}

type DeleteTargetResponse struct {
	ContentType         string
	DeleteTargetResult  map[string]interface{}
	StatusCode          int64
	ValidationException *interface{}
}
