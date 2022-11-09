import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteVolumeActionEnum {
    DeleteVolume = "DeleteVolume"
}
export declare enum PostDeleteVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteVolumeQueryParams extends SpeakeasyBase {
    action: PostDeleteVolumeActionEnum;
    version: PostDeleteVolumeVersionEnum;
}
export declare class PostDeleteVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteVolumeRequest extends SpeakeasyBase {
    queryParams: PostDeleteVolumeQueryParams;
    headers: PostDeleteVolumeHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteVolumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
