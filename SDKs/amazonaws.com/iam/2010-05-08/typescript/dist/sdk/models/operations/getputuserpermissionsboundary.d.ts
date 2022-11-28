import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetPutUserPermissionsBoundaryActionEnum {
    PutUserPermissionsBoundary = "PutUserPermissionsBoundary"
}
export declare enum GetPutUserPermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetPutUserPermissionsBoundaryQueryParams extends SpeakeasyBase {
    action: GetPutUserPermissionsBoundaryActionEnum;
    permissionsBoundary: string;
    userName: string;
    version: GetPutUserPermissionsBoundaryVersionEnum;
}
export declare class GetPutUserPermissionsBoundaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPutUserPermissionsBoundaryRequest extends SpeakeasyBase {
    queryParams: GetPutUserPermissionsBoundaryQueryParams;
    headers: GetPutUserPermissionsBoundaryHeaders;
}
export declare class GetPutUserPermissionsBoundaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
