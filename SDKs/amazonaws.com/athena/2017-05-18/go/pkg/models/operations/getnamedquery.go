package operations

import (
	"openapi/pkg/models/shared"
)

type GetNamedQueryXAmzTargetEnum string

const (
	GetNamedQueryXAmzTargetEnumAmazonAthenaGetNamedQuery GetNamedQueryXAmzTargetEnum = "AmazonAthena.GetNamedQuery"
)

type GetNamedQueryHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetNamedQueryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetNamedQueryRequest struct {
	Headers GetNamedQueryHeaders
	Request shared.GetNamedQueryInput `request:"mediaType=application/json"`
}

type GetNamedQueryResponse struct {
	ContentType             string
	GetNamedQueryOutput     *shared.GetNamedQueryOutput
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
