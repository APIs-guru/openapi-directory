package operations

type DeleteMitigationActionPathParams struct {
	ActionName string `pathParam:"style=simple,explode=false,name=actionName"`
}

type DeleteMitigationActionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteMitigationActionRequest struct {
	PathParams DeleteMitigationActionPathParams
	Headers    DeleteMitigationActionHeaders
}

type DeleteMitigationActionResponse struct {
	ContentType                    string
	DeleteMitigationActionResponse map[string]interface{}
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
