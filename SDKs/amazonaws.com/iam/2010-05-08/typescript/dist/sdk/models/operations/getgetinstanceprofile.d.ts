import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetInstanceProfileActionEnum {
    GetInstanceProfile = "GetInstanceProfile"
}
export declare enum GetGetInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetInstanceProfileQueryParams extends SpeakeasyBase {
    action: GetGetInstanceProfileActionEnum;
    instanceProfileName: string;
    version: GetGetInstanceProfileVersionEnum;
}
export declare class GetGetInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetInstanceProfileRequest extends SpeakeasyBase {
    queryParams: GetGetInstanceProfileQueryParams;
    headers: GetGetInstanceProfileHeaders;
}
export declare class GetGetInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
