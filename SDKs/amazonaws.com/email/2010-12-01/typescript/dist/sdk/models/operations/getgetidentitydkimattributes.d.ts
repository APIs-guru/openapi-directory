import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetIdentityDkimAttributesActionEnum {
    GetIdentityDkimAttributes = "GetIdentityDkimAttributes"
}
export declare enum GetGetIdentityDkimAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetGetIdentityDkimAttributesQueryParams extends SpeakeasyBase {
    action: GetGetIdentityDkimAttributesActionEnum;
    identities: string[];
    version: GetGetIdentityDkimAttributesVersionEnum;
}
export declare class GetGetIdentityDkimAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetIdentityDkimAttributesRequest extends SpeakeasyBase {
    queryParams: GetGetIdentityDkimAttributesQueryParams;
    headers: GetGetIdentityDkimAttributesHeaders;
}
export declare class GetGetIdentityDkimAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
