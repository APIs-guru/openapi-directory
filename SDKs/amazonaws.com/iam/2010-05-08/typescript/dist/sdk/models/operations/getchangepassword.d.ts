import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetChangePasswordActionEnum {
    ChangePassword = "ChangePassword"
}
export declare enum GetChangePasswordVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetChangePasswordQueryParams extends SpeakeasyBase {
    action: GetChangePasswordActionEnum;
    newPassword: string;
    oldPassword: string;
    version: GetChangePasswordVersionEnum;
}
export declare class GetChangePasswordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetChangePasswordRequest extends SpeakeasyBase {
    queryParams: GetChangePasswordQueryParams;
    headers: GetChangePasswordHeaders;
}
export declare class GetChangePasswordResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
