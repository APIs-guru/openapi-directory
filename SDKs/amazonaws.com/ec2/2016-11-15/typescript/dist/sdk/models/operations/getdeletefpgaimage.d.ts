import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteFpgaImageActionEnum {
    DeleteFpgaImage = "DeleteFpgaImage"
}
export declare enum GetDeleteFpgaImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteFpgaImageQueryParams extends SpeakeasyBase {
    action: GetDeleteFpgaImageActionEnum;
    dryRun?: boolean;
    fpgaImageId: string;
    version: GetDeleteFpgaImageVersionEnum;
}
export declare class GetDeleteFpgaImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteFpgaImageRequest extends SpeakeasyBase {
    queryParams: GetDeleteFpgaImageQueryParams;
    headers: GetDeleteFpgaImageHeaders;
}
export declare class GetDeleteFpgaImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
