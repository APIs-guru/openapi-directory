package operations

import (
	"openapi/pkg/models/shared"
)

type SubmitAttachmentStateChangesXAmzTargetEnum string

const (
	SubmitAttachmentStateChangesXAmzTargetEnumAmazonEc2ContainerServiceV20141113SubmitAttachmentStateChanges SubmitAttachmentStateChangesXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges"
)

type SubmitAttachmentStateChangesHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SubmitAttachmentStateChangesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SubmitAttachmentStateChangesRequest struct {
	Headers SubmitAttachmentStateChangesHeaders
	Request shared.SubmitAttachmentStateChangesRequest `request:"mediaType=application/json"`
}

type SubmitAttachmentStateChangesResponse struct {
	AccessDeniedException                *interface{}
	ClientException                      *interface{}
	ContentType                          string
	InvalidParameterException            *interface{}
	ServerException                      *interface{}
	StatusCode                           int64
	SubmitAttachmentStateChangesResponse *shared.SubmitAttachmentStateChangesResponse
}
