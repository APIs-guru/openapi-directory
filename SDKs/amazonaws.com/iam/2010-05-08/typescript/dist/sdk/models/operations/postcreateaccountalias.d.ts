import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateAccountAliasActionEnum {
    CreateAccountAlias = "CreateAccountAlias"
}
export declare enum PostCreateAccountAliasVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostCreateAccountAliasQueryParams extends SpeakeasyBase {
    action: PostCreateAccountAliasActionEnum;
    version: PostCreateAccountAliasVersionEnum;
}
export declare class PostCreateAccountAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateAccountAliasRequest extends SpeakeasyBase {
    queryParams: PostCreateAccountAliasQueryParams;
    headers: PostCreateAccountAliasHeaders;
    request?: Uint8Array;
}
export declare class PostCreateAccountAliasResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
