import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetAccessKeyLastUsedActionEnum {
    GetAccessKeyLastUsed = "GetAccessKeyLastUsed"
}
export declare enum GetGetAccessKeyLastUsedVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetAccessKeyLastUsedQueryParams extends SpeakeasyBase {
    accessKeyId: string;
    action: GetGetAccessKeyLastUsedActionEnum;
    version: GetGetAccessKeyLastUsedVersionEnum;
}
export declare class GetGetAccessKeyLastUsedHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetAccessKeyLastUsedRequest extends SpeakeasyBase {
    queryParams: GetGetAccessKeyLastUsedQueryParams;
    headers: GetGetAccessKeyLastUsedHeaders;
}
export declare class GetGetAccessKeyLastUsedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
