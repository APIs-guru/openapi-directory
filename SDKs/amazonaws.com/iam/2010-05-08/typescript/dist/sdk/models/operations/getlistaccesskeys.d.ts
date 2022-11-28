import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListAccessKeysActionEnum {
    ListAccessKeys = "ListAccessKeys"
}
export declare enum GetListAccessKeysVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListAccessKeysQueryParams extends SpeakeasyBase {
    action: GetListAccessKeysActionEnum;
    marker?: string;
    maxItems?: number;
    userName?: string;
    version: GetListAccessKeysVersionEnum;
}
export declare class GetListAccessKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListAccessKeysRequest extends SpeakeasyBase {
    queryParams: GetListAccessKeysQueryParams;
    headers: GetListAccessKeysHeaders;
}
export declare class GetListAccessKeysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
