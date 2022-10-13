package operations

import (
	"openapi/pkg/models/shared"
)

type ListThingsQueryParams struct {
	AttributeName           *string `queryParam:"style=form,explode=true,name=attributeName"`
	AttributeValue          *string `queryParam:"style=form,explode=true,name=attributeValue"`
	MaxResults              *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken               *string `queryParam:"style=form,explode=true,name=nextToken"`
	ThingTypeName           *string `queryParam:"style=form,explode=true,name=thingTypeName"`
	UsePrefixAttributeValue *bool   `queryParam:"style=form,explode=true,name=usePrefixAttributeValue"`
}

type ListThingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListThingsRequest struct {
	QueryParams ListThingsQueryParams
	Headers     ListThingsHeaders
}

type ListThingsResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ListThingsResponse          *shared.ListThingsResponse
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
