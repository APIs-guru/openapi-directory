import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeSynonymOptionsActionEnum {
    DescribeSynonymOptions = "DescribeSynonymOptions"
}
export declare enum PostDescribeSynonymOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostDescribeSynonymOptionsQueryParams extends SpeakeasyBase {
    action: PostDescribeSynonymOptionsActionEnum;
    version: PostDescribeSynonymOptionsVersionEnum;
}
export declare class PostDescribeSynonymOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSynonymOptionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeSynonymOptionsQueryParams;
    headers: PostDescribeSynonymOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSynonymOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
