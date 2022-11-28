import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeElasticGpusActionEnum {
    DescribeElasticGpus = "DescribeElasticGpus"
}
export declare enum PostDescribeElasticGpusVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeElasticGpusQueryParams extends SpeakeasyBase {
    action: PostDescribeElasticGpusActionEnum;
    version: PostDescribeElasticGpusVersionEnum;
}
export declare class PostDescribeElasticGpusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeElasticGpusRequest extends SpeakeasyBase {
    queryParams: PostDescribeElasticGpusQueryParams;
    headers: PostDescribeElasticGpusHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeElasticGpusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
