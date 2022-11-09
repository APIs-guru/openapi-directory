import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAttachInstancesActionEnum {
    AttachInstances = "AttachInstances"
}
export declare enum GetAttachInstancesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetAttachInstancesQueryParams extends SpeakeasyBase {
    action: GetAttachInstancesActionEnum;
    autoScalingGroupName: string;
    instanceIds?: string[];
    version: GetAttachInstancesVersionEnum;
}
export declare class GetAttachInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAttachInstancesRequest extends SpeakeasyBase {
    queryParams: GetAttachInstancesQueryParams;
    headers: GetAttachInstancesHeaders;
}
export declare class GetAttachInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
