import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateStorageLocationActionEnum {
    CreateStorageLocation = "CreateStorageLocation"
}
export declare enum GetCreateStorageLocationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetCreateStorageLocationQueryParams extends SpeakeasyBase {
    action: GetCreateStorageLocationActionEnum;
    version: GetCreateStorageLocationVersionEnum;
}
export declare class GetCreateStorageLocationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateStorageLocationRequest extends SpeakeasyBase {
    queryParams: GetCreateStorageLocationQueryParams;
    headers: GetCreateStorageLocationHeaders;
}
export declare class GetCreateStorageLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
