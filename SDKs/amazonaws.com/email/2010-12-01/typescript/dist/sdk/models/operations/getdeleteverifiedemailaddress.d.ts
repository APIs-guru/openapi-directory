import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteVerifiedEmailAddressActionEnum {
    DeleteVerifiedEmailAddress = "DeleteVerifiedEmailAddress"
}
export declare enum GetDeleteVerifiedEmailAddressVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeleteVerifiedEmailAddressQueryParams extends SpeakeasyBase {
    action: GetDeleteVerifiedEmailAddressActionEnum;
    emailAddress: string;
    version: GetDeleteVerifiedEmailAddressVersionEnum;
}
export declare class GetDeleteVerifiedEmailAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteVerifiedEmailAddressRequest extends SpeakeasyBase {
    queryParams: GetDeleteVerifiedEmailAddressQueryParams;
    headers: GetDeleteVerifiedEmailAddressHeaders;
}
export declare class GetDeleteVerifiedEmailAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
