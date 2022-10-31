package operations

type DeleteMountTargetPathParams struct {
	MountTargetID string `pathParam:"style=simple,explode=false,name=MountTargetId"`
}

type DeleteMountTargetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteMountTargetRequest struct {
	PathParams DeleteMountTargetPathParams
	Headers    DeleteMountTargetHeaders
}

type DeleteMountTargetResponse struct {
	BadRequest          *interface{}
	ContentType         string
	DependencyTimeout   *interface{}
	InternalServerError *interface{}
	MountTargetNotFound *interface{}
	StatusCode          int64
}
