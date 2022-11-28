import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteAccountAliasActionEnum {
    DeleteAccountAlias = "DeleteAccountAlias"
}
export declare enum GetDeleteAccountAliasVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteAccountAliasQueryParams extends SpeakeasyBase {
    accountAlias: string;
    action: GetDeleteAccountAliasActionEnum;
    version: GetDeleteAccountAliasVersionEnum;
}
export declare class GetDeleteAccountAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteAccountAliasRequest extends SpeakeasyBase {
    queryParams: GetDeleteAccountAliasQueryParams;
    headers: GetDeleteAccountAliasHeaders;
}
export declare class GetDeleteAccountAliasResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
