package operations

import (
	"openapi/pkg/models/shared"
)

type ListV2LoggingLevelsTargetTypeEnum string

const (
	ListV2LoggingLevelsTargetTypeEnumDefault    ListV2LoggingLevelsTargetTypeEnum = "DEFAULT"
	ListV2LoggingLevelsTargetTypeEnumThingGroup ListV2LoggingLevelsTargetTypeEnum = "THING_GROUP"
)

type ListV2LoggingLevelsQueryParams struct {
	MaxResults *int64                             `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string                            `queryParam:"style=form,explode=true,name=nextToken"`
	TargetType *ListV2LoggingLevelsTargetTypeEnum `queryParam:"style=form,explode=true,name=targetType"`
}

type ListV2LoggingLevelsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListV2LoggingLevelsRequest struct {
	QueryParams ListV2LoggingLevelsQueryParams
	Headers     ListV2LoggingLevelsHeaders
}

type ListV2LoggingLevelsResponse struct {
	ContentType                 string
	InternalException           *interface{}
	InvalidRequestException     *interface{}
	ListV2LoggingLevelsResponse *shared.ListV2LoggingLevelsResponse
	NotConfiguredException      *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
