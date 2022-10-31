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
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListConfigurationHistoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
