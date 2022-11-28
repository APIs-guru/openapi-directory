import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCopyImageActionEnum {
    CopyImage = "CopyImage"
}
export declare enum GetCopyImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCopyImageQueryParams extends SpeakeasyBase {
    action: GetCopyImageActionEnum;
    clientToken?: string;
    description?: string;
    destinationOutpostArn?: string;
    dryRun?: boolean;
    encrypted?: boolean;
    kmsKeyId?: string;
    name: string;
    sourceImageId: string;
    sourceRegion: string;
    version: GetCopyImageVersionEnum;
}
export declare class GetCopyImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCopyImageRequest extends SpeakeasyBase {
    queryParams: GetCopyImageQueryParams;
    headers: GetCopyImageHeaders;
}
export declare class GetCopyImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
