import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMonitoringSubscription20200531PathParams extends SpeakeasyBase {
    distributionId: string;
}
export declare class GetMonitoringSubscription20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMonitoringSubscription20200531Request extends SpeakeasyBase {
    pathParams: GetMonitoringSubscription20200531PathParams;
    headers: GetMonitoringSubscription20200531Headers;
}
export declare class GetMonitoringSubscription20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
