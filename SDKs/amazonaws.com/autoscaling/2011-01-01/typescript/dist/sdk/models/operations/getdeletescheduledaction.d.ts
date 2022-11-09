import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteScheduledActionActionEnum {
    DeleteScheduledAction = "DeleteScheduledAction"
}
export declare enum GetDeleteScheduledActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDeleteScheduledActionQueryParams extends SpeakeasyBase {
    action: GetDeleteScheduledActionActionEnum;
    autoScalingGroupName: string;
    scheduledActionName: string;
    version: GetDeleteScheduledActionVersionEnum;
}
export declare class GetDeleteScheduledActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteScheduledActionRequest extends SpeakeasyBase {
    queryParams: GetDeleteScheduledActionQueryParams;
    headers: GetDeleteScheduledActionHeaders;
}
export declare class GetDeleteScheduledActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
