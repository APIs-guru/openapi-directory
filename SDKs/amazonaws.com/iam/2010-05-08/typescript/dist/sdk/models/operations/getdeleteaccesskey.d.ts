import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteAccessKeyActionEnum {
    DeleteAccessKey = "DeleteAccessKey"
}
export declare enum GetDeleteAccessKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteAccessKeyQueryParams extends SpeakeasyBase {
    accessKeyId: string;
    action: GetDeleteAccessKeyActionEnum;
    userName?: string;
    version: GetDeleteAccessKeyVersionEnum;
}
export declare class GetDeleteAccessKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteAccessKeyRequest extends SpeakeasyBase {
    queryParams: GetDeleteAccessKeyQueryParams;
    headers: GetDeleteAccessKeyHeaders;
}
export declare class GetDeleteAccessKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
