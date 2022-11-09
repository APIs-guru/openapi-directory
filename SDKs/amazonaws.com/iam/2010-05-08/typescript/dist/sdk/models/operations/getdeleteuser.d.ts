import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteUserActionEnum {
    DeleteUser = "DeleteUser"
}
export declare enum GetDeleteUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteUserQueryParams extends SpeakeasyBase {
    action: GetDeleteUserActionEnum;
    userName: string;
    version: GetDeleteUserVersionEnum;
}
export declare class GetDeleteUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteUserRequest extends SpeakeasyBase {
    queryParams: GetDeleteUserQueryParams;
    headers: GetDeleteUserHeaders;
}
export declare class GetDeleteUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
