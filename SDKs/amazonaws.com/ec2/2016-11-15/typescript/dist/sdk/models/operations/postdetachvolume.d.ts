import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDetachVolumeActionEnum {
    DetachVolume = "DetachVolume"
}
export declare enum PostDetachVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDetachVolumeQueryParams extends SpeakeasyBase {
    action: PostDetachVolumeActionEnum;
    version: PostDetachVolumeVersionEnum;
}
export declare class PostDetachVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDetachVolumeRequest extends SpeakeasyBase {
    queryParams: PostDetachVolumeQueryParams;
    headers: PostDetachVolumeHeaders;
    request?: Uint8Array;
}
export declare class PostDetachVolumeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
