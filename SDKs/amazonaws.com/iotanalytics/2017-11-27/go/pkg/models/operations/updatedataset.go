package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDatasetPathParams struct {
	DatasetName string `pathParam:"style=simple,explode=false,name=datasetName"`
}

type UpdateDatasetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDatasetRequestBodyRetentionPeriod struct {
	NumberOfDays *int64 `json:"numberOfDays"`
	Unlimited    *bool  `json:"unlimited"`
}

type UpdateDatasetRequestBodyVersioningConfiguration struct {
	MaxVersions *int64 `json:"maxVersions"`
	Unlimited   *bool  `json:"unlimited"`
}

type UpdateDatasetRequestBody struct {
	Actions                 []shared.DatasetAction                           `json:"actions"`
	ContentDeliveryRules    []shared.DatasetContentDeliveryRule              `json:"contentDeliveryRules"`
	LateDataRules           []shared.LateDataRule                            `json:"lateDataRules"`
	RetentionPeriod         *UpdateDatasetRequestBodyRetentionPeriod         `json:"retentionPeriod"`
	Triggers                []shared.DatasetTrigger                          `json:"triggers"`
	VersioningConfiguration *UpdateDatasetRequestBodyVersioningConfiguration `json:"versioningConfiguration"`
}

type UpdateDatasetRequest struct {
	PathParams UpdateDatasetPathParams
	Headers    UpdateDatasetHeaders
	Request    UpdateDatasetRequestBody `request:"mediaType=application/json"`
}

type UpdateDatasetResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
