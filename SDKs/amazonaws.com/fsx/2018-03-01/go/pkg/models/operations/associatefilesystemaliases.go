package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateFileSystemAliasesXAmzTargetEnum string

const (
	AssociateFileSystemAliasesXAmzTargetEnumAwsSimbaAPIServiceV20180301AssociateFileSystemAliases AssociateFileSystemAliasesXAmzTargetEnum = "AWSSimbaAPIService_v20180301.AssociateFileSystemAliases"
)

type AssociateFileSystemAliasesHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateFileSystemAliasesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateFileSystemAliasesRequest struct {
	Headers AssociateFileSystemAliasesHeaders
	Request shared.AssociateFileSystemAliasesRequest `request:"mediaType=application/json"`
}

type AssociateFileSystemAliasesResponse struct {
	AssociateFileSystemAliasesResponse *shared.AssociateFileSystemAliasesResponse
	BadRequest                         *interface{}
	ContentType                        string
	FileSystemNotFound                 *interface{}
	InternalServerError                *interface{}
	StatusCode                         int64
}
