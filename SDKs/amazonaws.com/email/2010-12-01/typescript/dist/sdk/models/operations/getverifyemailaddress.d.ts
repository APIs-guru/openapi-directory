import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetVerifyEmailAddressActionEnum {
    VerifyEmailAddress = "VerifyEmailAddress"
}
export declare enum GetVerifyEmailAddressVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetVerifyEmailAddressQueryParams extends SpeakeasyBase {
    action: GetVerifyEmailAddressActionEnum;
    emailAddress: string;
    version: GetVerifyEmailAddressVersionEnum;
}
export declare class GetVerifyEmailAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetVerifyEmailAddressRequest extends SpeakeasyBase {
    queryParams: GetVerifyEmailAddressQueryParams;
    headers: GetVerifyEmailAddressHeaders;
}
export declare class GetVerifyEmailAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
