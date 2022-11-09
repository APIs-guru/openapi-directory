import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteAccountAliasActionEnum {
    DeleteAccountAlias = "DeleteAccountAlias"
}
export declare enum PostDeleteAccountAliasVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteAccountAliasQueryParams extends SpeakeasyBase {
    action: PostDeleteAccountAliasActionEnum;
    version: PostDeleteAccountAliasVersionEnum;
}
export declare class PostDeleteAccountAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteAccountAliasRequest extends SpeakeasyBase {
    queryParams: PostDeleteAccountAliasQueryParams;
    headers: PostDeleteAccountAliasHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteAccountAliasResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
