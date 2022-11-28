import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateAccessKeyActionEnum {
    CreateAccessKey = "CreateAccessKey"
}
export declare enum GetCreateAccessKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetCreateAccessKeyQueryParams extends SpeakeasyBase {
    action: GetCreateAccessKeyActionEnum;
    userName?: string;
    version: GetCreateAccessKeyVersionEnum;
}
export declare class GetCreateAccessKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateAccessKeyRequest extends SpeakeasyBase {
    queryParams: GetCreateAccessKeyQueryParams;
    headers: GetCreateAccessKeyHeaders;
}
export declare class GetCreateAccessKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
