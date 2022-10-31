package operations

import (
	"openapi/pkg/models/shared"
)

type ListResourceServersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListResourceServersXAmzTargetEnum string

const (
	ListResourceServersXAmzTargetEnumAwsCognitoIdentityProviderServiceListResourceServers ListResourceServersXAmzTargetEnum = "AWSCognitoIdentityProviderService.ListResourceServers"
)

type ListResourceServersHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListResourceServersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListResourceServersRequest struct {
	QueryParams ListResourceServersQueryParams
	Headers     ListResourceServersHeaders
	Request     shared.ListResourceServersRequest `request:"mediaType=application/json"`
}

type ListResourceServersResponse struct {
	ContentType                 string
	InternalErrorException      *interface{}
	InvalidParameterException   *interface{}
	ListResourceServersResponse *shared.ListResourceServersResponse
	NotAuthorizedException      *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	TooManyRequestsException    *interface{}
}
