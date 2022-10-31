package operations

import (
	"openapi/pkg/models/shared"
)

type ListArchivesXAmzTargetEnum string

const (
	ListArchivesXAmzTargetEnumAwsEventsListArchives ListArchivesXAmzTargetEnum = "AWSEvents.ListArchives"
)

type ListArchivesHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListArchivesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
