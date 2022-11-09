import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAttachVolumeActionEnum {
    AttachVolume = "AttachVolume"
}
export declare enum GetAttachVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAttachVolumeQueryParams extends SpeakeasyBase {
    action: GetAttachVolumeActionEnum;
    device: string;
    dryRun?: boolean;
    instanceId: string;
    version: GetAttachVolumeVersionEnum;
    volumeId: string;
}
export declare class GetAttachVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAttachVolumeRequest extends SpeakeasyBase {
    queryParams: GetAttachVolumeQueryParams;
    headers: GetAttachVolumeHeaders;
}
export declare class GetAttachVolumeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
