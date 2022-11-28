import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdateLoginProfileActionEnum {
    UpdateLoginProfile = "UpdateLoginProfile"
}
export declare enum GetUpdateLoginProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUpdateLoginProfileQueryParams extends SpeakeasyBase {
    action: GetUpdateLoginProfileActionEnum;
    password?: string;
    passwordResetRequired?: boolean;
    userName: string;
    version: GetUpdateLoginProfileVersionEnum;
}
export declare class GetUpdateLoginProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateLoginProfileRequest extends SpeakeasyBase {
    queryParams: GetUpdateLoginProfileQueryParams;
    headers: GetUpdateLoginProfileHeaders;
}
export declare class GetUpdateLoginProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
