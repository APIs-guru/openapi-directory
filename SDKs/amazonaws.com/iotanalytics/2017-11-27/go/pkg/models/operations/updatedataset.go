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
	NumberOfDays *int64 `json:"numberOfDays,omitempty"`
	Unlimited    *bool  `json:"unlimited,omitempty"`
}

type UpdateDatasetRequestBodyVersioningConfiguration struct {
	MaxVersions *int64 `json:"maxVersions,omitempty"`
	Unlimited   *bool  `json:"unlimited,omitempty"`
}

type UpdateDatasetRequestBody struct {
	Actions                 []shared.DatasetAction                           `json:"actions"`
	ContentDeliveryRules    []shared.DatasetContentDeliveryRule              `json:"contentDeliveryRules,omitempty"`
	LateDataRules           []shared.LateDataRule                            `json:"lateDataRules,omitempty"`
	RetentionPeriod         *UpdateDatasetRequestBodyRetentionPeriod         `json:"retentionPeriod,omitempty"`
	Triggers                []shared.DatasetTrigger                          `json:"triggers,omitempty"`
	VersioningConfiguration *UpdateDatasetRequestBodyVersioningConfiguration `json:"versioningConfiguration,omitempty"`
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
