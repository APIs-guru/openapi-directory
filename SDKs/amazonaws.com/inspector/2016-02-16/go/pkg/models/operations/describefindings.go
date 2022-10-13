package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFindingsXAmzTargetEnum string

const (
	DescribeFindingsXAmzTargetEnumInspectorServiceDescribeFindings DescribeFindingsXAmzTargetEnum = "InspectorService.DescribeFindings"
)

type DescribeFindingsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFindingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeFindingsRequest struct {
	Headers DescribeFindingsHeaders
	Request shared.DescribeFindingsRequest `request:"mediaType=application/json"`
}

type DescribeFindingsResponse struct {
	ContentType              string
	DescribeFindingsResponse *shared.DescribeFindingsResponse
	InternalException        *interface{}
	InvalidInputException    *interface{}
	StatusCode               int64
}
