package operations

import (
	"openapi/pkg/models/shared"
)

type ListAvailableZonesXAmzTargetEnum string

const (
	ListAvailableZonesXAmzTargetEnumCloudHsmFrontendServiceListAvailableZones ListAvailableZonesXAmzTargetEnum = "CloudHsmFrontendService.ListAvailableZones"
)

type ListAvailableZonesHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAvailableZonesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAvailableZonesRequest struct {
	Headers ListAvailableZonesHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type ListAvailableZonesResponse struct {
	CloudHsmInternalException  *interface{}
	CloudHsmServiceException   *interface{}
	ContentType                string
	InvalidRequestException    *interface{}
	ListAvailableZonesResponse *shared.ListAvailableZonesResponse
	StatusCode                 int64
}
