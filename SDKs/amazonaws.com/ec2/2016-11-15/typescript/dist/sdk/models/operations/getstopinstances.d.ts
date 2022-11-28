import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetStopInstancesActionEnum {
    StopInstances = "StopInstances"
}
export declare enum GetStopInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetStopInstancesQueryParams extends SpeakeasyBase {
    action: GetStopInstancesActionEnum;
    dryRun?: boolean;
    force?: boolean;
    hibernate?: boolean;
    instanceId: string[];
    version: GetStopInstancesVersionEnum;
}
export declare class GetStopInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStopInstancesRequest extends SpeakeasyBase {
    queryParams: GetStopInstancesQueryParams;
    headers: GetStopInstancesHeaders;
}
export declare class GetStopInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
