import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteSuggesterActionEnum {
    DeleteSuggester = "DeleteSuggester"
}
export declare enum PostDeleteSuggesterVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostDeleteSuggesterQueryParams extends SpeakeasyBase {
    action: PostDeleteSuggesterActionEnum;
    version: PostDeleteSuggesterVersionEnum;
}
export declare class PostDeleteSuggesterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteSuggesterRequest extends SpeakeasyBase {
    queryParams: PostDeleteSuggesterQueryParams;
    headers: PostDeleteSuggesterHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteSuggesterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
