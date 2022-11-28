import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostImportVolumeActionEnum {
    ImportVolume = "ImportVolume"
}
export declare enum PostImportVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostImportVolumeQueryParams extends SpeakeasyBase {
    action: PostImportVolumeActionEnum;
    version: PostImportVolumeVersionEnum;
}
export declare class PostImportVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostImportVolumeRequest extends SpeakeasyBase {
    queryParams: PostImportVolumeQueryParams;
    headers: PostImportVolumeHeaders;
    request?: Uint8Array;
}
export declare class PostImportVolumeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
