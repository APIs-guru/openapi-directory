package operations

import (
	"openapi/pkg/models/shared"
)

type ListArchivesXAmzTargetEnum string

const (
	ListArchivesXAmzTargetEnumAwsEventsListArchives ListArchivesXAmzTargetEnum = "AWSEvents.ListArchives"
)

type ListArchivesHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListArchivesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListArchivesRequest struct {
	Headers ListArchivesHeaders
	Request shared.ListArchivesRequest `request:"mediaType=application/json"`
}

type ListArchivesResponse struct {
	ContentType               string
	InternalException         *interface{}
	ListArchivesResponse      *shared.ListArchivesResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
