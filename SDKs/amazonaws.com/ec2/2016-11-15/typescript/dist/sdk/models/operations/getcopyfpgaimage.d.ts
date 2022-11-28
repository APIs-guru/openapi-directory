import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCopyFpgaImageActionEnum {
    CopyFpgaImage = "CopyFpgaImage"
}
export declare enum GetCopyFpgaImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCopyFpgaImageQueryParams extends SpeakeasyBase {
    action: GetCopyFpgaImageActionEnum;
    clientToken?: string;
    description?: string;
    dryRun?: boolean;
    name?: string;
    sourceFpgaImageId: string;
    sourceRegion: string;
    version: GetCopyFpgaImageVersionEnum;
}
export declare class GetCopyFpgaImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCopyFpgaImageRequest extends SpeakeasyBase {
    queryParams: GetCopyFpgaImageQueryParams;
    headers: GetCopyFpgaImageHeaders;
}
export declare class GetCopyFpgaImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
