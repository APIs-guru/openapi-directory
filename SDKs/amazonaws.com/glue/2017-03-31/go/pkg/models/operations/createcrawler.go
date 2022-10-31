package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCrawlerXAmzTargetEnum string

const (
	CreateCrawlerXAmzTargetEnumAwsGlueCreateCrawler CreateCrawlerXAmzTargetEnum = "AWSGlue.CreateCrawler"
)

type CreateCrawlerHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCrawlerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateCrawlerRequest struct {
	Headers CreateCrawlerHeaders
	Request shared.CreateCrawlerRequest `request:"mediaType=application/json"`
}

type CreateCrawlerResponse struct {
	AlreadyExistsException               *interface{}
	ContentType                          string
	CreateCrawlerResponse                map[string]interface{}
	InvalidInputException                *interface{}
	OperationTimeoutException            *interface{}
	ResourceNumberLimitExceededException *interface{}
	StatusCode                           int64
}
