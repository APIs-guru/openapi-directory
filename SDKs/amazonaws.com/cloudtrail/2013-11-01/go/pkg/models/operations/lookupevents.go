package operations

import (
	"openapi/pkg/models/shared"
)

type LookupEventsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type LookupEventsXAmzTargetEnum string

const (
	LookupEventsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101LookupEvents LookupEventsXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents"
)

type LookupEventsHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        LookupEventsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type LookupEventsRequest struct {
	QueryParams LookupEventsQueryParams
	Headers     LookupEventsHeaders
	Request     shared.LookupEventsRequest `request:"mediaType=application/json"`
}

type LookupEventsResponse struct {
	ContentType                      string
	InvalidEventCategoryException    *interface{}
	InvalidLookupAttributesException *interface{}
	InvalidMaxResultsException       *interface{}
	InvalidNextTokenException        *interface{}
	InvalidTimeRangeException        *interface{}
	LookupEventsResponse             *shared.LookupEventsResponse
	OperationNotPermittedException   *interface{}
	StatusCode                       int64
	UnsupportedOperationException    *interface{}
}
