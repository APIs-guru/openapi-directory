import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetExitStandbyActionEnum {
    ExitStandby = "ExitStandby"
}
export declare enum GetExitStandbyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetExitStandbyQueryParams extends SpeakeasyBase {
    action: GetExitStandbyActionEnum;
    autoScalingGroupName: string;
    instanceIds?: string[];
    version: GetExitStandbyVersionEnum;
}
export declare class GetExitStandbyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetExitStandbyRequest extends SpeakeasyBase {
    queryParams: GetExitStandbyQueryParams;
    headers: GetExitStandbyHeaders;
}
export declare class GetExitStandbyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
