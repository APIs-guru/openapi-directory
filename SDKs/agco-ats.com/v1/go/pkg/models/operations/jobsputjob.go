package operations

import (
	"openapi/pkg/models/shared"
)

type JobsPutJobPathParams struct {
	JobID int32 `pathParam:"style=simple,explode=false,name=jobID"`
}

type JobsPutJobRequestsInput struct {
	ApplicationXML           []byte                               `request:"mediaType=application/xml"`
	BuildSystemSharedDtoJob  *shared.BuildSystemSharedDtoJobInput `request:"mediaType=application/json"`
	BuildSystemSharedDtoJob1 *shared.BuildSystemSharedDtoJobInput `request:"mediaType=application/x-www-form-urlencoded"`
	BuildSystemSharedDtoJob2 *shared.BuildSystemSharedDtoJobInput `request:"mediaType=text/json"`
	TextXML                  []byte                               `request:"mediaType=text/xml"`
}

type JobsPutJobRequest struct {
	PathParams JobsPutJobPathParams
	Request    JobsPutJobRequestsInput
}

type JobsPutJobResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
