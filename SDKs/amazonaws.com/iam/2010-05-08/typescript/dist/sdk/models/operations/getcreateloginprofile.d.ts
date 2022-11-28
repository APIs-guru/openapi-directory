import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateLoginProfileActionEnum {
    CreateLoginProfile = "CreateLoginProfile"
}
export declare enum GetCreateLoginProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetCreateLoginProfileQueryParams extends SpeakeasyBase {
    action: GetCreateLoginProfileActionEnum;
    password: string;
    passwordResetRequired?: boolean;
    userName: string;
    version: GetCreateLoginProfileVersionEnum;
}
export declare class GetCreateLoginProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateLoginProfileRequest extends SpeakeasyBase {
    queryParams: GetCreateLoginProfileQueryParams;
    headers: GetCreateLoginProfileHeaders;
}
export declare class GetCreateLoginProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
