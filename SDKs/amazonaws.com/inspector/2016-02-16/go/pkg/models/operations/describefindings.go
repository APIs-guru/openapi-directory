package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFindingsXAmzTargetEnum string

const (
	DescribeFindingsXAmzTargetEnumInspectorServiceDescribeFindings DescribeFindingsXAmzTargetEnum = "InspectorService.DescribeFindings"
)

type DescribeFindingsHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFindingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
