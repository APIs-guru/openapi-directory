import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUpdateAccessKeyActionEnum {
    UpdateAccessKey = "UpdateAccessKey"
}
export declare enum GetUpdateAccessKeyStatusEnum {
    Active = "Active",
    Inactive = "Inactive"
}
export declare enum GetUpdateAccessKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUpdateAccessKeyQueryParams extends SpeakeasyBase {
    accessKeyId: string;
    action: GetUpdateAccessKeyActionEnum;
    status: GetUpdateAccessKeyStatusEnum;
    userName?: string;
    version: GetUpdateAccessKeyVersionEnum;
}
export declare class GetUpdateAccessKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateAccessKeyRequest extends SpeakeasyBase {
    queryParams: GetUpdateAccessKeyQueryParams;
    headers: GetUpdateAccessKeyHeaders;
}
export declare class GetUpdateAccessKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
