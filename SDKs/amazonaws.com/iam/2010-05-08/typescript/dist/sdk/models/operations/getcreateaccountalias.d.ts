import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateAccountAliasActionEnum {
    CreateAccountAlias = "CreateAccountAlias"
}
export declare enum GetCreateAccountAliasVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetCreateAccountAliasQueryParams extends SpeakeasyBase {
    accountAlias: string;
    action: GetCreateAccountAliasActionEnum;
    version: GetCreateAccountAliasVersionEnum;
}
export declare class GetCreateAccountAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateAccountAliasRequest extends SpeakeasyBase {
    queryParams: GetCreateAccountAliasQueryParams;
    headers: GetCreateAccountAliasHeaders;
}
export declare class GetCreateAccountAliasResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
