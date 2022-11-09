import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetEnterStandbyActionEnum {
    EnterStandby = "EnterStandby"
}
export declare enum GetEnterStandbyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetEnterStandbyQueryParams extends SpeakeasyBase {
    action: GetEnterStandbyActionEnum;
    autoScalingGroupName: string;
    instanceIds?: string[];
    shouldDecrementDesiredCapacity: boolean;
    version: GetEnterStandbyVersionEnum;
}
export declare class GetEnterStandbyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnterStandbyRequest extends SpeakeasyBase {
    queryParams: GetEnterStandbyQueryParams;
    headers: GetEnterStandbyHeaders;
}
export declare class GetEnterStandbyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
