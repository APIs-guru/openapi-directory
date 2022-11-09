import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteInstanceProfileActionEnum {
    DeleteInstanceProfile = "DeleteInstanceProfile"
}
export declare enum GetDeleteInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteInstanceProfileQueryParams extends SpeakeasyBase {
    action: GetDeleteInstanceProfileActionEnum;
    instanceProfileName: string;
    version: GetDeleteInstanceProfileVersionEnum;
}
export declare class GetDeleteInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteInstanceProfileRequest extends SpeakeasyBase {
    queryParams: GetDeleteInstanceProfileQueryParams;
    headers: GetDeleteInstanceProfileHeaders;
}
export declare class GetDeleteInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
