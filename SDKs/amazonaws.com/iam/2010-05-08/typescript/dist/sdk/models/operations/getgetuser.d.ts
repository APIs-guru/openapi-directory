import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetUserActionEnum {
    GetUser = "GetUser"
}
export declare enum GetGetUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetUserQueryParams extends SpeakeasyBase {
    action: GetGetUserActionEnum;
    userName?: string;
    version: GetGetUserVersionEnum;
}
export declare class GetGetUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetUserRequest extends SpeakeasyBase {
    queryParams: GetGetUserQueryParams;
    headers: GetGetUserHeaders;
}
export declare class GetGetUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
