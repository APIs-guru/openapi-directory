package operations

import (
	"openapi/pkg/models/shared"
)

type ListBackupsXAmzTargetEnum string

const (
	ListBackupsXAmzTargetEnumDynamoDb20120810ListBackups ListBackupsXAmzTargetEnum = "DynamoDB_20120810.ListBackups"
)

type ListBackupsHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListBackupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListBackupsRequest struct {
	Headers ListBackupsHeaders
	Request shared.ListBackupsInput `request:"mediaType=application/json"`
}

type ListBackupsResponse struct {
	ContentType         string
	InternalServerError *interface{}
	ListBackupsOutput   *shared.ListBackupsOutput
	StatusCode          int64
}
