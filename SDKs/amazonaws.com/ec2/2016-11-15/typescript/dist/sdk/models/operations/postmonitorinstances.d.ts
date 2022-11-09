import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostMonitorInstancesActionEnum {
    MonitorInstances = "MonitorInstances"
}
export declare enum PostMonitorInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostMonitorInstancesQueryParams extends SpeakeasyBase {
    action: PostMonitorInstancesActionEnum;
    version: PostMonitorInstancesVersionEnum;
}
export declare class PostMonitorInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostMonitorInstancesRequest extends SpeakeasyBase {
    queryParams: PostMonitorInstancesQueryParams;
    headers: PostMonitorInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostMonitorInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
