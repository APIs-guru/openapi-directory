import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyVolumeActionEnum {
    ModifyVolume = "ModifyVolume"
}
export declare enum PostModifyVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyVolumeQueryParams extends SpeakeasyBase {
    action: PostModifyVolumeActionEnum;
    version: PostModifyVolumeVersionEnum;
}
export declare class PostModifyVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyVolumeRequest extends SpeakeasyBase {
    queryParams: PostModifyVolumeQueryParams;
    headers: PostModifyVolumeHeaders;
    request?: Uint8Array;
}
export declare class PostModifyVolumeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
