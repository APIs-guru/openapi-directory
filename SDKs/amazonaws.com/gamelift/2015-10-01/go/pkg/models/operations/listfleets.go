package operations

import (
	"openapi/pkg/models/shared"
)

type ListFleetsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFleetsXAmzTargetEnum string

const (
	ListFleetsXAmzTargetEnumGameLiftListFleets ListFleetsXAmzTargetEnum = "GameLift.ListFleets"
)

type ListFleetsHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFleetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListFleetsRequest struct {
	QueryParams ListFleetsQueryParams
	Headers     ListFleetsHeaders
	Request     shared.ListFleetsInput `request:"mediaType=application/json"`
}

type ListFleetsResponse struct {
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	ListFleetsOutput         *shared.ListFleetsOutput
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
