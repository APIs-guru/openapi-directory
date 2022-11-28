import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDetachVolumeActionEnum {
    DetachVolume = "DetachVolume"
}
export declare enum GetDetachVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDetachVolumeQueryParams extends SpeakeasyBase {
    action: GetDetachVolumeActionEnum;
    device?: string;
    dryRun?: boolean;
    force?: boolean;
    instanceId?: string;
    version: GetDetachVolumeVersionEnum;
    volumeId: string;
}
export declare class GetDetachVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDetachVolumeRequest extends SpeakeasyBase {
    queryParams: GetDetachVolumeQueryParams;
    headers: GetDetachVolumeHeaders;
}
export declare class GetDetachVolumeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
