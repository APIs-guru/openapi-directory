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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListContactsRequestBody struct {
	EndTime           time.Time                  `json:"endTime"`
	GroundStation     *string                    `json:"groundStation"`
	MaxResults        *int64                     `json:"maxResults"`
	MissionProfileArn *string                    `json:"missionProfileArn"`
	NextToken         *string                    `json:"nextToken"`
	SatelliteArn      *string                    `json:"satelliteArn"`
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
