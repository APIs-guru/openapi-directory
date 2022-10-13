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
	NumberOfDays *int64 `json:"numberOfDays"`
	Unlimited    *bool  `json:"unlimited"`
}

type CreateDatasetRequestBodyVersioningConfiguration struct {
	MaxVersions *int64 `json:"maxVersions"`
	Unlimited   *bool  `json:"unlimited"`
}

type CreateDatasetRequestBody struct {
	Actions                 []shared.DatasetAction                           `json:"actions"`
	ContentDeliveryRules    []shared.DatasetContentDeliveryRule              `json:"contentDeliveryRules"`
	DatasetName             string                                           `json:"datasetName"`
	LateDataRules           []shared.LateDataRule                            `json:"lateDataRules"`
	RetentionPeriod         *CreateDatasetRequestBodyRetentionPeriod         `json:"retentionPeriod"`
	Tags                    []shared.Tag                                     `json:"tags"`
	Triggers                []shared.DatasetTrigger                          `json:"triggers"`
	VersioningConfiguration *CreateDatasetRequestBodyVersioningConfiguration `json:"versioningConfiguration"`
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
