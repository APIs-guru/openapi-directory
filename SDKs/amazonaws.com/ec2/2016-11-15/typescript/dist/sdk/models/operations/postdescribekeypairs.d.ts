import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeKeyPairsActionEnum {
    DescribeKeyPairs = "DescribeKeyPairs"
}
export declare enum PostDescribeKeyPairsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeKeyPairsQueryParams extends SpeakeasyBase {
    action: PostDescribeKeyPairsActionEnum;
    version: PostDescribeKeyPairsVersionEnum;
}
export declare class PostDescribeKeyPairsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeKeyPairsRequest extends SpeakeasyBase {
    queryParams: PostDescribeKeyPairsQueryParams;
    headers: PostDescribeKeyPairsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeKeyPairsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
