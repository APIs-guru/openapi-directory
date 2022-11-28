import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRebootInstancesActionEnum {
    RebootInstances = "RebootInstances"
}
export declare enum GetRebootInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetRebootInstancesQueryParams extends SpeakeasyBase {
    action: GetRebootInstancesActionEnum;
    dryRun?: boolean;
    instanceId: string[];
    version: GetRebootInstancesVersionEnum;
}
export declare class GetRebootInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRebootInstancesRequest extends SpeakeasyBase {
    queryParams: GetRebootInstancesQueryParams;
    headers: GetRebootInstancesHeaders;
}
export declare class GetRebootInstancesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
