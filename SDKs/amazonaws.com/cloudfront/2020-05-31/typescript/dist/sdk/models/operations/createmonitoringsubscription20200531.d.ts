import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateMonitoringSubscription20200531PathParams extends SpeakeasyBase {
    distributionId: string;
}
export declare class CreateMonitoringSubscription20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateMonitoringSubscription20200531Request extends SpeakeasyBase {
    pathParams: CreateMonitoringSubscription20200531PathParams;
    headers: CreateMonitoringSubscription20200531Headers;
    request: Uint8Array;
}
export declare class CreateMonitoringSubscription20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
