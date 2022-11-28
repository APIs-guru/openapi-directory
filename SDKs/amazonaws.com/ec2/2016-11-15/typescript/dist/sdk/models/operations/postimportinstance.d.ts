import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostImportInstanceActionEnum {
    ImportInstance = "ImportInstance"
}
export declare enum PostImportInstanceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostImportInstanceQueryParams extends SpeakeasyBase {
    action: PostImportInstanceActionEnum;
    version: PostImportInstanceVersionEnum;
}
export declare class PostImportInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostImportInstanceRequest extends SpeakeasyBase {
    queryParams: PostImportInstanceQueryParams;
    headers: PostImportInstanceHeaders;
    request?: Uint8Array;
}
export declare class PostImportInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
