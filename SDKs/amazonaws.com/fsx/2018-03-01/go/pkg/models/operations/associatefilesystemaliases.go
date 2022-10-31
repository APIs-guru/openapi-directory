package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateFileSystemAliasesXAmzTargetEnum string

const (
	AssociateFileSystemAliasesXAmzTargetEnumAwsSimbaAPIServiceV20180301AssociateFileSystemAliases AssociateFileSystemAliasesXAmzTargetEnum = "AWSSimbaAPIService_v20180301.AssociateFileSystemAliases"
)

type AssociateFileSystemAliasesHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateFileSystemAliasesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
