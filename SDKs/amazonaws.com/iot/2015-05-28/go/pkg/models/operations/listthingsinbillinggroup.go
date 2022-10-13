package operations

import (
	"openapi/pkg/models/shared"
)

type ListThingsInBillingGroupPathParams struct {
	BillingGroupName string `pathParam:"style=simple,explode=false,name=billingGroupName"`
}

type ListThingsInBillingGroupQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListThingsInBillingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListThingsInBillingGroupRequest struct {
	PathParams  ListThingsInBillingGroupPathParams
	QueryParams ListThingsInBillingGroupQueryParams
	Headers     ListThingsInBillingGroupHeaders
}

type ListThingsInBillingGroupResponse struct {
	ContentType                      string
	InternalFailureException         *interface{}
	InvalidRequestException          *interface{}
	ListThingsInBillingGroupResponse *shared.ListThingsInBillingGroupResponse
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
}
