import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateVolumeActionEnum {
    CreateVolume = "CreateVolume"
}
export declare enum PostCreateVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateVolumeQueryParams extends SpeakeasyBase {
    action: PostCreateVolumeActionEnum;
    version: PostCreateVolumeVersionEnum;
}
export declare class PostCreateVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateVolumeRequest extends SpeakeasyBase {
    queryParams: PostCreateVolumeQueryParams;
    headers: PostCreateVolumeHeaders;
    request?: Uint8Array;
}
export declare class PostCreateVolumeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
