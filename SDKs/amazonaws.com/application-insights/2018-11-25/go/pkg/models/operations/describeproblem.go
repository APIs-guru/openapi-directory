package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProblemXAmzTargetEnum string

const (
	DescribeProblemXAmzTargetEnumEc2WindowsBarleyServiceDescribeProblem DescribeProblemXAmzTargetEnum = "EC2WindowsBarleyService.DescribeProblem"
)

type DescribeProblemHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProblemXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeProblemRequest struct {
	Headers DescribeProblemHeaders
	Request shared.DescribeProblemRequest `request:"mediaType=application/json"`
}

type DescribeProblemResponse struct {
	ContentType               string
	DescribeProblemResponse   *shared.DescribeProblemResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
