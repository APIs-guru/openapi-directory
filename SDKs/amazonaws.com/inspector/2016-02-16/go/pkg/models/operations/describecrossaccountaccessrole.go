package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCrossAccountAccessRoleXAmzTargetEnum string

const (
	DescribeCrossAccountAccessRoleXAmzTargetEnumInspectorServiceDescribeCrossAccountAccessRole DescribeCrossAccountAccessRoleXAmzTargetEnum = "InspectorService.DescribeCrossAccountAccessRole"
)

type DescribeCrossAccountAccessRoleHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCrossAccountAccessRoleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeCrossAccountAccessRoleRequest struct {
	Headers DescribeCrossAccountAccessRoleHeaders
}

type DescribeCrossAccountAccessRoleResponse struct {
	ContentType                            string
	DescribeCrossAccountAccessRoleResponse *shared.DescribeCrossAccountAccessRoleResponse
	InternalException                      *interface{}
	StatusCode                             int64
}
