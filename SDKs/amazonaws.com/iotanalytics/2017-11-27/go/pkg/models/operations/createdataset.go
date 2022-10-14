package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDatasetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDatasetRequestBodyRetentionPeriod struct {
	NumberOfDays *int64 `json:"numberOfDays,omitempty"`
	Unlimited    *bool  `json:"unlimited,omitempty"`
}

type CreateDatasetRequestBodyVersioningConfiguration struct {
	MaxVersions *int64 `json:"maxVersions,omitempty"`
	Unlimited   *bool  `json:"unlimited,omitempty"`
}

type CreateDatasetRequestBody struct {
	Actions                 []shared.DatasetAction                           `json:"actions"`
	ContentDeliveryRules    []shared.DatasetContentDeliveryRule              `json:"contentDeliveryRules,omitempty"`
	DatasetName             string                                           `json:"datasetName"`
	LateDataRules           []shared.LateDataRule                            `json:"lateDataRules,omitempty"`
	RetentionPeriod         *CreateDatasetRequestBodyRetentionPeriod         `json:"retentionPeriod,omitempty"`
	Tags                    []shared.Tag                                     `json:"tags,omitempty"`
	Triggers                []shared.DatasetTrigger                          `json:"triggers,omitempty"`
	VersioningConfiguration *CreateDatasetRequestBodyVersioningConfiguration `json:"versioningConfiguration,omitempty"`
}

type CreateDatasetRequest struct {
	Headers CreateDatasetHeaders
	Request CreateDatasetRequestBody `request:"mediaType=application/json"`
}

type CreateDatasetResponse struct {
	ContentType                    string
	CreateDatasetResponse          *shared.CreateDatasetResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
