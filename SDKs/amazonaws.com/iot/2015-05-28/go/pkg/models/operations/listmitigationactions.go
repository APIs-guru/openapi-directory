package operations

import (
	"openapi/pkg/models/shared"
)

type ListMitigationActionsActionTypeEnum string

const (
	ListMitigationActionsActionTypeEnumUpdateDeviceCertificate     ListMitigationActionsActionTypeEnum = "UPDATE_DEVICE_CERTIFICATE"
	ListMitigationActionsActionTypeEnumUpdateCaCertificate         ListMitigationActionsActionTypeEnum = "UPDATE_CA_CERTIFICATE"
	ListMitigationActionsActionTypeEnumAddThingsToThingGroup       ListMitigationActionsActionTypeEnum = "ADD_THINGS_TO_THING_GROUP"
	ListMitigationActionsActionTypeEnumReplaceDefaultPolicyVersion ListMitigationActionsActionTypeEnum = "REPLACE_DEFAULT_POLICY_VERSION"
	ListMitigationActionsActionTypeEnumEnableIotLogging            ListMitigationActionsActionTypeEnum = "ENABLE_IOT_LOGGING"
	ListMitigationActionsActionTypeEnumPublishFindingToSns         ListMitigationActionsActionTypeEnum = "PUBLISH_FINDING_TO_SNS"
)

type ListMitigationActionsQueryParams struct {
	ActionType *ListMitigationActionsActionTypeEnum `queryParam:"style=form,explode=true,name=actionType"`
	MaxResults *int64                               `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string                              `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListMitigationActionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListMitigationActionsRequest struct {
	QueryParams ListMitigationActionsQueryParams
	Headers     ListMitigationActionsHeaders
}

type ListMitigationActionsResponse struct {
	ContentType                   string
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	ListMitigationActionsResponse *shared.ListMitigationActionsResponse
	StatusCode                    int64
	ThrottlingException           *interface{}
}
