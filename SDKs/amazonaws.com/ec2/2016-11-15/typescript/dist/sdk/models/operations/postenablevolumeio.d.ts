import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostEnableVolumeIoActionEnum {
    EnableVolumeIo = "EnableVolumeIO"
}
export declare enum PostEnableVolumeIoVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostEnableVolumeIoQueryParams extends SpeakeasyBase {
    action: PostEnableVolumeIoActionEnum;
    version: PostEnableVolumeIoVersionEnum;
}
export declare class PostEnableVolumeIoHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableVolumeIoRequest extends SpeakeasyBase {
    queryParams: PostEnableVolumeIoQueryParams;
    headers: PostEnableVolumeIoHeaders;
    request?: Uint8Array;
}
export declare class PostEnableVolumeIoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
