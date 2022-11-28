import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAttachVolumeActionEnum {
    AttachVolume = "AttachVolume"
}
export declare enum PostAttachVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAttachVolumeQueryParams extends SpeakeasyBase {
    action: PostAttachVolumeActionEnum;
    version: PostAttachVolumeVersionEnum;
}
export declare class PostAttachVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAttachVolumeRequest extends SpeakeasyBase {
    queryParams: PostAttachVolumeQueryParams;
    headers: PostAttachVolumeHeaders;
    request?: Uint8Array;
}
export declare class PostAttachVolumeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
