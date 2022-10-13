package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRepositoryAssociationPathParams struct {
	AssociationArn string `pathParam:"style=simple,explode=false,name=AssociationArn"`
}

type DescribeRepositoryAssociationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
