import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListConfigurationSetsActionEnum {
    ListConfigurationSets = "ListConfigurationSets"
}
export declare enum PostListConfigurationSetsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostListConfigurationSetsQueryParams extends SpeakeasyBase {
    action: PostListConfigurationSetsActionEnum;
    version: PostListConfigurationSetsVersionEnum;
}
export declare class PostListConfigurationSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListConfigurationSetsRequest extends SpeakeasyBase {
    queryParams: PostListConfigurationSetsQueryParams;
    headers: PostListConfigurationSetsHeaders;
    request?: Uint8Array;
}
export declare class PostListConfigurationSetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
