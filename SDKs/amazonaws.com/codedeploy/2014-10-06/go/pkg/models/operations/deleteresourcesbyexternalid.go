package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResourcesByExternalIDXAmzTargetEnum string

const (
	DeleteResourcesByExternalIDXAmzTargetEnumCodeDeploy20141006DeleteResourcesByExternalID DeleteResourcesByExternalIDXAmzTargetEnum = "CodeDeploy_20141006.DeleteResourcesByExternalId"
)

type DeleteResourcesByExternalIDHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteResourcesByExternalIDXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteResourcesByExternalIDRequest struct {
	Headers DeleteResourcesByExternalIDHeaders
	Request shared.DeleteResourcesByExternalIDInput `request:"mediaType=application/json"`
}

type DeleteResourcesByExternalIDResponse struct {
	ContentType                       string
	DeleteResourcesByExternalIDOutput map[string]interface{}
	StatusCode                        int64
}
