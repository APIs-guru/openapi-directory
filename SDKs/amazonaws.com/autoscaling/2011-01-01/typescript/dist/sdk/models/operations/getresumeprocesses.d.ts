import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetResumeProcessesActionEnum {
    ResumeProcesses = "ResumeProcesses"
}
export declare enum GetResumeProcessesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetResumeProcessesQueryParams extends SpeakeasyBase {
    action: GetResumeProcessesActionEnum;
    autoScalingGroupName: string;
    scalingProcesses?: string[];
    version: GetResumeProcessesVersionEnum;
}
export declare class GetResumeProcessesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResumeProcessesRequest extends SpeakeasyBase {
    queryParams: GetResumeProcessesQueryParams;
    headers: GetResumeProcessesHeaders;
}
export declare class GetResumeProcessesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
