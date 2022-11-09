import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteUserPermissionsBoundaryActionEnum {
    DeleteUserPermissionsBoundary = "DeleteUserPermissionsBoundary"
}
export declare enum GetDeleteUserPermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteUserPermissionsBoundaryQueryParams extends SpeakeasyBase {
    action: GetDeleteUserPermissionsBoundaryActionEnum;
    userName: string;
    version: GetDeleteUserPermissionsBoundaryVersionEnum;
}
export declare class GetDeleteUserPermissionsBoundaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteUserPermissionsBoundaryRequest extends SpeakeasyBase {
    queryParams: GetDeleteUserPermissionsBoundaryQueryParams;
    headers: GetDeleteUserPermissionsBoundaryHeaders;
}
export declare class GetDeleteUserPermissionsBoundaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
