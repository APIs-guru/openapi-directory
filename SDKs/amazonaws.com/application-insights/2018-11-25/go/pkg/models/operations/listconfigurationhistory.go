package operations

import (
	"openapi/pkg/models/shared"
)

type ListConfigurationHistoryQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListConfigurationHistoryXAmzTargetEnum string

const (
	ListConfigurationHistoryXAmzTargetEnumEc2WindowsBarleyServiceListConfigurationHistory ListConfigurationHistoryXAmzTargetEnum = "EC2WindowsBarleyService.ListConfigurationHistory"
)

type ListConfigurationHistoryHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListConfigurationHistoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListConfigurationHistoryRequest struct {
	QueryParams ListConfigurationHistoryQueryParams
	Headers     ListConfigurationHistoryHeaders
	Request     shared.ListConfigurationHistoryRequest `request:"mediaType=application/json"`
}

type ListConfigurationHistoryResponse struct {
	ContentType                      string
	InternalServerException          *interface{}
	ListConfigurationHistoryResponse *shared.ListConfigurationHistoryResponse
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ValidationException              *interface{}
}
