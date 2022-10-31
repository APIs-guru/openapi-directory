package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListContactsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListContactsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListContactsRequestBody struct {
	EndTime           time.Time                  `json:"endTime"`
	GroundStation     *string                    `json:"groundStation,omitempty"`
	MaxResults        *int64                     `json:"maxResults,omitempty"`
	MissionProfileArn *string                    `json:"missionProfileArn,omitempty"`
	NextToken         *string                    `json:"nextToken,omitempty"`
	SatelliteArn      *string                    `json:"satelliteArn,omitempty"`
	StartTime         time.Time                  `json:"startTime"`
	StatusList        []shared.ContactStatusEnum `json:"statusList"`
}

type ListContactsRequest struct {
	QueryParams ListContactsQueryParams
	Headers     ListContactsHeaders
	Request     ListContactsRequestBody `request:"mediaType=application/json"`
}

type ListContactsResponse struct {
	ContentType               string
	DependencyException       *interface{}
	InvalidParameterException *interface{}
	ListContactsResponse      *shared.ListContactsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
