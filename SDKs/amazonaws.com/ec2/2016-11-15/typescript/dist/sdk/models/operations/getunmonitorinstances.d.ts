import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUnmonitorInstancesActionEnum {
    UnmonitorInstances = "UnmonitorInstances"
}
export declare enum GetUnmonitorInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetUnmonitorInstancesQueryParams extends SpeakeasyBase {
    action: GetUnmonitorInstancesActionEnum;
    dryRun?: boolean;
    instanceId: string[];
    version: GetUnmonitorInstancesVersionEnum;
}
export declare class GetUnmonitorInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUnmonitorInstancesRequest extends SpeakeasyBase {
    queryParams: GetUnmonitorInstancesQueryParams;
    headers: GetUnmonitorInstancesHeaders;
}
export declare class GetUnmonitorInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
