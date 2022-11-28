import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUntagUserActionEnum {
    UntagUser = "UntagUser"
}
export declare enum GetUntagUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUntagUserQueryParams extends SpeakeasyBase {
    action: GetUntagUserActionEnum;
    tagKeys: string[];
    userName: string;
    version: GetUntagUserVersionEnum;
}
export declare class GetUntagUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUntagUserRequest extends SpeakeasyBase {
    queryParams: GetUntagUserQueryParams;
    headers: GetUntagUserHeaders;
}
export declare class GetUntagUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
