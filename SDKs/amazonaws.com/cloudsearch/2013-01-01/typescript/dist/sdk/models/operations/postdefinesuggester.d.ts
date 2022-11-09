import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDefineSuggesterActionEnum {
    DefineSuggester = "DefineSuggester"
}
export declare enum PostDefineSuggesterVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostDefineSuggesterQueryParams extends SpeakeasyBase {
    action: PostDefineSuggesterActionEnum;
    version: PostDefineSuggesterVersionEnum;
}
export declare class PostDefineSuggesterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDefineSuggesterRequest extends SpeakeasyBase {
    queryParams: PostDefineSuggesterQueryParams;
    headers: PostDefineSuggesterHeaders;
    request?: Uint8Array;
}
export declare class PostDefineSuggesterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
