import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUntagInstanceProfileActionEnum {
    UntagInstanceProfile = "UntagInstanceProfile"
}
export declare enum GetUntagInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUntagInstanceProfileQueryParams extends SpeakeasyBase {
    action: GetUntagInstanceProfileActionEnum;
    instanceProfileName: string;
    tagKeys: string[];
    version: GetUntagInstanceProfileVersionEnum;
}
export declare class GetUntagInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUntagInstanceProfileRequest extends SpeakeasyBase {
    queryParams: GetUntagInstanceProfileQueryParams;
    headers: GetUntagInstanceProfileHeaders;
}
export declare class GetUntagInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
