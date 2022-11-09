import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeMetricCollectionTypesActionEnum {
    DescribeMetricCollectionTypes = "DescribeMetricCollectionTypes"
}
export declare enum GetDescribeMetricCollectionTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeMetricCollectionTypesQueryParams extends SpeakeasyBase {
    action: GetDescribeMetricCollectionTypesActionEnum;
    version: GetDescribeMetricCollectionTypesVersionEnum;
}
export declare class GetDescribeMetricCollectionTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeMetricCollectionTypesRequest extends SpeakeasyBase {
    queryParams: GetDescribeMetricCollectionTypesQueryParams;
    headers: GetDescribeMetricCollectionTypesHeaders;
}
export declare class GetDescribeMetricCollectionTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
