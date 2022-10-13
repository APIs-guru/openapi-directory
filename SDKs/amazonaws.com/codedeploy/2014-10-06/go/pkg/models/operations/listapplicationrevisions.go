package operations

import (
	"openapi/pkg/models/shared"
)

type ListApplicationRevisionsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListApplicationRevisionsXAmzTargetEnum string

const (
	ListApplicationRevisionsXAmzTargetEnumCodeDeploy20141006ListApplicationRevisions ListApplicationRevisionsXAmzTargetEnum = "CodeDeploy_20141006.ListApplicationRevisions"
)

type ListApplicationRevisionsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListApplicationRevisionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListApplicationRevisionsRequest struct {
	QueryParams ListApplicationRevisionsQueryParams
	Headers     ListApplicationRevisionsHeaders
	Request     shared.ListApplicationRevisionsInput `request:"mediaType=application/json"`
}

type ListApplicationRevisionsResponse struct {
	ApplicationDoesNotExistException    *interface{}
	ApplicationNameRequiredException    *interface{}
	BucketNameFilterRequiredException   *interface{}
	ContentType                         string
	InvalidApplicationNameException     *interface{}
	InvalidBucketNameFilterException    *interface{}
	InvalidDeployedStateFilterException *interface{}
	InvalidKeyPrefixFilterException     *interface{}
	InvalidNextTokenException           *interface{}
	InvalidSortByException              *interface{}
	InvalidSortOrderException           *interface{}
	ListApplicationRevisionsOutput      *shared.ListApplicationRevisionsOutput
	StatusCode                          int64
}
