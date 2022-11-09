import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSuspendProcessesActionEnum {
    SuspendProcesses = "SuspendProcesses"
}
export declare enum GetSuspendProcessesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetSuspendProcessesQueryParams extends SpeakeasyBase {
    action: GetSuspendProcessesActionEnum;
    autoScalingGroupName: string;
    scalingProcesses?: string[];
    version: GetSuspendProcessesVersionEnum;
}
export declare class GetSuspendProcessesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSuspendProcessesRequest extends SpeakeasyBase {
    queryParams: GetSuspendProcessesQueryParams;
    headers: GetSuspendProcessesHeaders;
}
export declare class GetSuspendProcessesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
