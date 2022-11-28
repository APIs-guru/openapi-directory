import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeStopwordOptionsActionEnum {
    DescribeStopwordOptions = "DescribeStopwordOptions"
}
export declare enum PostDescribeStopwordOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostDescribeStopwordOptionsQueryParams extends SpeakeasyBase {
    action: PostDescribeStopwordOptionsActionEnum;
    version: PostDescribeStopwordOptionsVersionEnum;
}
export declare class PostDescribeStopwordOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeStopwordOptionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeStopwordOptionsQueryParams;
    headers: PostDescribeStopwordOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeStopwordOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
