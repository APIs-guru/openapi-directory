import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetTerminateInstancesActionEnum {
    TerminateInstances = "TerminateInstances"
}
export declare enum GetTerminateInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetTerminateInstancesQueryParams extends SpeakeasyBase {
    action: GetTerminateInstancesActionEnum;
    dryRun?: boolean;
    instanceId: string[];
    version: GetTerminateInstancesVersionEnum;
}
export declare class GetTerminateInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTerminateInstancesRequest extends SpeakeasyBase {
    queryParams: GetTerminateInstancesQueryParams;
    headers: GetTerminateInstancesHeaders;
}
export declare class GetTerminateInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
