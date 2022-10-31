package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRepositoryAssociationPathParams struct {
	AssociationArn string `pathParam:"style=simple,explode=false,name=AssociationArn"`
}

type DescribeRepositoryAssociationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeRepositoryAssociationRequest struct {
	PathParams DescribeRepositoryAssociationPathParams
	Headers    DescribeRepositoryAssociationHeaders
}

type DescribeRepositoryAssociationResponse struct {
	AccessDeniedException                 *interface{}
	ContentType                           string
	DescribeRepositoryAssociationResponse *shared.DescribeRepositoryAssociationResponse
	InternalServerException               *interface{}
	NotFoundException                     *interface{}
	StatusCode                            int64
	ThrottlingException                   *interface{}
	ValidationException                   *interface{}
}
