package operations

type DeleteResolverPathParams struct {
	APIID     string `pathParam:"style=simple,explode=false,name=apiId"`
	FieldName string `pathParam:"style=simple,explode=false,name=fieldName"`
	TypeName  string `pathParam:"style=simple,explode=false,name=typeName"`
}

type DeleteResolverHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteResolverRequest struct {
	PathParams DeleteResolverPathParams
	Headers    DeleteResolverHeaders
}

type DeleteResolverResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteResolverResponse          map[string]interface{}
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
