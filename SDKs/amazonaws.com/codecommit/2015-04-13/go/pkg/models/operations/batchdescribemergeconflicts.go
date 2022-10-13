package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDescribeMergeConflictsXAmzTargetEnum string

const (
	BatchDescribeMergeConflictsXAmzTargetEnumCodeCommit20150413BatchDescribeMergeConflicts BatchDescribeMergeConflictsXAmzTargetEnum = "CodeCommit_20150413.BatchDescribeMergeConflicts"
)

type BatchDescribeMergeConflictsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDescribeMergeConflictsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchDescribeMergeConflictsRequest struct {
	Headers BatchDescribeMergeConflictsHeaders
	Request shared.BatchDescribeMergeConflictsInput `request:"mediaType=application/json"`
}

type BatchDescribeMergeConflictsResponse struct {
	BatchDescribeMergeConflictsOutput          *shared.BatchDescribeMergeConflictsOutput
	CommitDoesNotExistException                *interface{}
	CommitRequiredException                    *interface{}
	ContentType                                string
	EncryptionIntegrityChecksFailedException   *interface{}
	EncryptionKeyAccessDeniedException         *interface{}
	EncryptionKeyDisabledException             *interface{}
	EncryptionKeyNotFoundException             *interface{}
	EncryptionKeyUnavailableException          *interface{}
	InvalidCommitException                     *interface{}
	InvalidConflictDetailLevelException        *interface{}
	InvalidConflictResolutionStrategyException *interface{}
	InvalidContinuationTokenException          *interface{}
	InvalidMaxConflictFilesException           *interface{}
	InvalidMaxMergeHunksException              *interface{}
	InvalidMergeOptionException                *interface{}
	InvalidRepositoryNameException             *interface{}
	MaximumFileContentToLoadExceededException  *interface{}
	MaximumItemsToCompareExceededException     *interface{}
	MergeOptionRequiredException               *interface{}
	RepositoryDoesNotExistException            *interface{}
	RepositoryNameRequiredException            *interface{}
	StatusCode                                 int64
	TipsDivergenceExceededException            *interface{}
}
