import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteUserActionEnum {
    DeleteUser = "DeleteUser"
}
export declare enum GetDeleteUserVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDeleteUserQueryParams extends SpeakeasyBase {
    action: GetDeleteUserActionEnum;
    userId: string;
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
