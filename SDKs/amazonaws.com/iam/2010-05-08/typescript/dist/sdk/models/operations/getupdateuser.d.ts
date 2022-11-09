import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUpdateUserActionEnum {
    UpdateUser = "UpdateUser"
}
export declare enum GetUpdateUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUpdateUserQueryParams extends SpeakeasyBase {
    action: GetUpdateUserActionEnum;
    newPath?: string;
    newUserName?: string;
    userName: string;
    version: GetUpdateUserVersionEnum;
}
export declare class GetUpdateUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateUserRequest extends SpeakeasyBase {
    queryParams: GetUpdateUserQueryParams;
    headers: GetUpdateUserHeaders;
}
export declare class GetUpdateUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
