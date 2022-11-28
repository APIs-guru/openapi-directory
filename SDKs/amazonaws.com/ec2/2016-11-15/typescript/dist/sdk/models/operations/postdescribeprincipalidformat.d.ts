import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribePrincipalIdFormatActionEnum {
    DescribePrincipalIdFormat = "DescribePrincipalIdFormat"
}
export declare enum PostDescribePrincipalIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribePrincipalIdFormatQueryParams extends SpeakeasyBase {
    action: PostDescribePrincipalIdFormatActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribePrincipalIdFormatVersionEnum;
}
export declare class PostDescribePrincipalIdFormatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribePrincipalIdFormatRequest extends SpeakeasyBase {
    queryParams: PostDescribePrincipalIdFormatQueryParams;
    headers: PostDescribePrincipalIdFormatHeaders;
    request?: Uint8Array;
}
export declare class PostDescribePrincipalIdFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
