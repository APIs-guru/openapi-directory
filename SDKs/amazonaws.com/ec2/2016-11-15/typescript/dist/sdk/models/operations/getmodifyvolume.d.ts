import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyVolumeActionEnum {
    ModifyVolume = "ModifyVolume"
}
export declare enum GetModifyVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare enum GetModifyVolumeVolumeTypeEnum {
    Standard = "standard",
    Io1 = "io1",
    Io2 = "io2",
    Gp2 = "gp2",
    Sc1 = "sc1",
    St1 = "st1",
    Gp3 = "gp3"
}
export declare class GetModifyVolumeQueryParams extends SpeakeasyBase {
    action: GetModifyVolumeActionEnum;
    dryRun?: boolean;
    iops?: number;
    multiAttachEnabled?: boolean;
    size?: number;
    throughput?: number;
    version: GetModifyVolumeVersionEnum;
    volumeId: string;
    volumeType?: GetModifyVolumeVolumeTypeEnum;
}
export declare class GetModifyVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyVolumeRequest extends SpeakeasyBase {
    queryParams: GetModifyVolumeQueryParams;
    headers: GetModifyVolumeHeaders;
}
export declare class GetModifyVolumeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
