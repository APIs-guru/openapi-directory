package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeContinuousBackupsXAmzTargetEnum string

const (
	DescribeContinuousBackupsXAmzTargetEnumDynamoDb20120810DescribeContinuousBackups DescribeContinuousBackupsXAmzTargetEnum = "DynamoDB_20120810.DescribeContinuousBackups"
)

type DescribeContinuousBackupsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeContinuousBackupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeContinuousBackupsRequest struct {
	Headers DescribeContinuousBackupsHeaders
	Request shared.DescribeContinuousBackupsInput `request:"mediaType=application/json"`
}

type DescribeContinuousBackupsResponse struct {
	ContentType                     string
	DescribeContinuousBackupsOutput *shared.DescribeContinuousBackupsOutput
	InternalServerError             *interface{}
	StatusCode                      int64
	TableNotFoundException          *interface{}
}
