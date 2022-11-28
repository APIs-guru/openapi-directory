import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteConfigurationSetActionEnum {
    DeleteConfigurationSet = "DeleteConfigurationSet"
}
export declare enum PostDeleteConfigurationSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeleteConfigurationSetQueryParams extends SpeakeasyBase {
    action: PostDeleteConfigurationSetActionEnum;
    version: PostDeleteConfigurationSetVersionEnum;
}
export declare class PostDeleteConfigurationSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteConfigurationSetRequest extends SpeakeasyBase {
    queryParams: PostDeleteConfigurationSetQueryParams;
    headers: PostDeleteConfigurationSetHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteConfigurationSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
