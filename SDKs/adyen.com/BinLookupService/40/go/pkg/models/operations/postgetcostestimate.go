package operations

import (
	"openapi/pkg/models/shared"
)

type PostGetCostEstimateSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostGetCostEstimateRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostGetCostEstimateSecurity
}

type PostGetCostEstimateResponse struct {
	ContentType          string
	CostEstimateResponse *interface{}
	ServiceError         *interface{}
	StatusCode           int64
}
