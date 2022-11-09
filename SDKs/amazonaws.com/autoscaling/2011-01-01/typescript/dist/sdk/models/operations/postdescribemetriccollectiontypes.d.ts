import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeMetricCollectionTypesActionEnum {
    DescribeMetricCollectionTypes = "DescribeMetricCollectionTypes"
}
export declare enum PostDescribeMetricCollectionTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeMetricCollectionTypesQueryParams extends SpeakeasyBase {
    action: PostDescribeMetricCollectionTypesActionEnum;
    version: PostDescribeMetricCollectionTypesVersionEnum;
}
export declare class PostDescribeMetricCollectionTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeMetricCollectionTypesRequest extends SpeakeasyBase {
    queryParams: PostDescribeMetricCollectionTypesQueryParams;
    headers: PostDescribeMetricCollectionTypesHeaders;
}
export declare class PostDescribeMetricCollectionTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
