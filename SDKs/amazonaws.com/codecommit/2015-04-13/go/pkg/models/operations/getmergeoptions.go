package operations

import (
	"openapi/pkg/models/shared"
)

type GetMergeOptionsXAmzTargetEnum string

const (
	GetMergeOptionsXAmzTargetEnumCodeCommit20150413GetMergeOptions GetMergeOptionsXAmzTargetEnum = "CodeCommit_20150413.GetMergeOptions"
)

type GetMergeOptionsHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMergeOptionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetMergeOptionsRequest struct {
	Headers GetMergeOptionsHeaders
	Request shared.GetMergeOptionsInput `request:"mediaType=application/json"`
}

type GetMergeOptionsResponse struct {
	CommitDoesNotExistException                *interface{}
	CommitRequiredException                    *interface{}
	ContentType                                string
	EncryptionIntegrityChecksFailedException   *interface{}
	EncryptionKeyAccessDeniedException         *interface{}
	EncryptionKeyDisabledException             *interface{}
	EncryptionKeyNotFoundException             *interface{}
	EncryptionKeyUnavailableException          *interface{}
	GetMergeOptionsOutput                      *shared.GetMergeOptionsOutput
	InvalidCommitException                     *interface{}
	InvalidConflictDetailLevelException        *interface{}
	InvalidConflictResolutionStrategyException *interface{}
	InvalidRepositoryNameException             *interface{}
	MaximumFileContentToLoadExceededException  *interface{}
	MaximumItemsToCompareExceededException     *interface{}
	RepositoryDoesNotExistException            *interface{}
	RepositoryNameRequiredException            *interface{}
	StatusCode                                 int64
	TipsDivergenceExceededException            *interface{}
}
