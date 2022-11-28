import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetPutScheduledUpdateGroupActionActionEnum {
    PutScheduledUpdateGroupAction = "PutScheduledUpdateGroupAction"
}
export declare enum GetPutScheduledUpdateGroupActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetPutScheduledUpdateGroupActionQueryParams extends SpeakeasyBase {
    action: GetPutScheduledUpdateGroupActionActionEnum;
    autoScalingGroupName: string;
    desiredCapacity?: number;
    endTime?: Date;
    maxSize?: number;
    minSize?: number;
    recurrence?: string;
    scheduledActionName: string;
    startTime?: Date;
    time?: Date;
    timeZone?: string;
    version: GetPutScheduledUpdateGroupActionVersionEnum;
}
export declare class GetPutScheduledUpdateGroupActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPutScheduledUpdateGroupActionRequest extends SpeakeasyBase {
    queryParams: GetPutScheduledUpdateGroupActionQueryParams;
    headers: GetPutScheduledUpdateGroupActionHeaders;
}
export declare class GetPutScheduledUpdateGroupActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
