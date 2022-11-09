import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetMonitorInstancesActionEnum {
    MonitorInstances = "MonitorInstances"
}
export declare enum GetMonitorInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetMonitorInstancesQueryParams extends SpeakeasyBase {
    action: GetMonitorInstancesActionEnum;
    dryRun?: boolean;
    instanceId: string[];
    version: GetMonitorInstancesVersionEnum;
}
export declare class GetMonitorInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMonitorInstancesRequest extends SpeakeasyBase {
    queryParams: GetMonitorInstancesQueryParams;
    headers: GetMonitorInstancesHeaders;
}
export declare class GetMonitorInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
