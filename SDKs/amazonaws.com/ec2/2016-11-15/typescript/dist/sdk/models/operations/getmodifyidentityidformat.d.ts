import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyIdentityIdFormatActionEnum {
    ModifyIdentityIdFormat = "ModifyIdentityIdFormat"
}
export declare enum GetModifyIdentityIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyIdentityIdFormatQueryParams extends SpeakeasyBase {
    action: GetModifyIdentityIdFormatActionEnum;
    principalArn: string;
    resource: string;
    useLongIds: boolean;
    version: GetModifyIdentityIdFormatVersionEnum;
}
export declare class GetModifyIdentityIdFormatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyIdentityIdFormatRequest extends SpeakeasyBase {
    queryParams: GetModifyIdentityIdFormatQueryParams;
    headers: GetModifyIdentityIdFormatHeaders;
}
export declare class GetModifyIdentityIdFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
