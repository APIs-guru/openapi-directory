import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListMitigationActionsActionTypeEnum {
    UpdateDeviceCertificate = "UPDATE_DEVICE_CERTIFICATE",
    UpdateCaCertificate = "UPDATE_CA_CERTIFICATE",
    AddThingsToThingGroup = "ADD_THINGS_TO_THING_GROUP",
    ReplaceDefaultPolicyVersion = "REPLACE_DEFAULT_POLICY_VERSION",
    EnableIotLogging = "ENABLE_IOT_LOGGING",
    PublishFindingToSns = "PUBLISH_FINDING_TO_SNS"
}
export declare class ListMitigationActionsQueryParams extends SpeakeasyBase {
    actionType?: ListMitigationActionsActionTypeEnum;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListMitigationActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListMitigationActionsRequest extends SpeakeasyBase {
    queryParams: ListMitigationActionsQueryParams;
    headers: ListMitigationActionsHeaders;
}
export declare class ListMitigationActionsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listMitigationActionsResponse?: shared.ListMitigationActionsResponse;
    statusCode: number;
    throttlingException?: any;
}
