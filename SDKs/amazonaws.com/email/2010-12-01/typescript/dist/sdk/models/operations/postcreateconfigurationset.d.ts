import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateConfigurationSetActionEnum {
    CreateConfigurationSet = "CreateConfigurationSet"
}
export declare enum PostCreateConfigurationSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCreateConfigurationSetQueryParams extends SpeakeasyBase {
    action: PostCreateConfigurationSetActionEnum;
    version: PostCreateConfigurationSetVersionEnum;
}
export declare class PostCreateConfigurationSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateConfigurationSetRequest extends SpeakeasyBase {
    queryParams: PostCreateConfigurationSetQueryParams;
    headers: PostCreateConfigurationSetHeaders;
    request?: Uint8Array;
}
export declare class PostCreateConfigurationSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
