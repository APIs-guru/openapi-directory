package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ReserveContactHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ReserveContactRequestBody struct {
	EndTime           time.Time         `json:"endTime"`
	GroundStation     string            `json:"groundStation"`
	MissionProfileArn string            `json:"missionProfileArn"`
	SatelliteArn      string            `json:"satelliteArn"`
	StartTime         time.Time         `json:"startTime"`
	Tags              map[string]string `json:"tags,omitempty"`
}

type ReserveContactRequest struct {
	Headers ReserveContactHeaders
	Request ReserveContactRequestBody `request:"mediaType=application/json"`
}

type ReserveContactResponse struct {
	ContactIDResponse         *shared.ContactIDResponse
	ContentType               string
	DependencyException       *interface{}
	InvalidParameterException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
