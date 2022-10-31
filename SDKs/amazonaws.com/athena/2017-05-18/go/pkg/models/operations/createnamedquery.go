package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNamedQueryXAmzTargetEnum string

const (
	CreateNamedQueryXAmzTargetEnumAmazonAthenaCreateNamedQuery CreateNamedQueryXAmzTargetEnum = "AmazonAthena.CreateNamedQuery"
)

type CreateNamedQueryHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateNamedQueryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateNamedQueryRequest struct {
	Headers CreateNamedQueryHeaders
	Request shared.CreateNamedQueryInput `request:"mediaType=application/json"`
}

type CreateNamedQueryResponse struct {
	ContentType             string
	CreateNamedQueryOutput  *shared.CreateNamedQueryOutput
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
