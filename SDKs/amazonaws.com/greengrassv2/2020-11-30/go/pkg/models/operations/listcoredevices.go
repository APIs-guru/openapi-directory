package operations

import (
	"openapi/pkg/models/shared"
)

type ListCoreDevicesStatusEnum string

const (
	ListCoreDevicesStatusEnumHealthy   ListCoreDevicesStatusEnum = "HEALTHY"
	ListCoreDevicesStatusEnumUnhealthy ListCoreDevicesStatusEnum = "UNHEALTHY"
)

type ListCoreDevicesQueryParams struct {
	MaxResults    *int64                     `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken     *string                    `queryParam:"style=form,explode=true,name=nextToken"`
	Status        *ListCoreDevicesStatusEnum `queryParam:"style=form,explode=true,name=status"`
	ThingGroupArn *string                    `queryParam:"style=form,explode=true,name=thingGroupArn"`
}

type ListCoreDevicesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListCoreDevicesRequest struct {
	QueryParams ListCoreDevicesQueryParams
	Headers     ListCoreDevicesHeaders
}

type ListCoreDevicesResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	ListCoreDevicesResponse *shared.ListCoreDevicesResponse
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
