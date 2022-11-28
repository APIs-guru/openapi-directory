import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeDhcpOptionsActionEnum {
    DescribeDhcpOptions = "DescribeDhcpOptions"
}
export declare enum PostDescribeDhcpOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeDhcpOptionsQueryParams extends SpeakeasyBase {
    action: PostDescribeDhcpOptionsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeDhcpOptionsVersionEnum;
}
export declare class PostDescribeDhcpOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDhcpOptionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeDhcpOptionsQueryParams;
    headers: PostDescribeDhcpOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDhcpOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
