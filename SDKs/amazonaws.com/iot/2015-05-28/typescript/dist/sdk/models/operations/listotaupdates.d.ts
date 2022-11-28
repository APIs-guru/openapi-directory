import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListOtaUpdatesOtaUpdateStatusEnum {
    CreatePending = "CREATE_PENDING",
    CreateInProgress = "CREATE_IN_PROGRESS",
    CreateComplete = "CREATE_COMPLETE",
    CreateFailed = "CREATE_FAILED"
}
export declare class ListOtaUpdatesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    otaUpdateStatus?: ListOtaUpdatesOtaUpdateStatusEnum;
}
export declare class ListOtaUpdatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListOtaUpdatesRequest extends SpeakeasyBase {
    queryParams: ListOtaUpdatesQueryParams;
    headers: ListOtaUpdatesHeaders;
}
export declare class ListOtaUpdatesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listOtaUpdatesResponse?: shared.ListOtaUpdatesResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
